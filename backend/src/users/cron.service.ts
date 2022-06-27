import { HttpException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import { Repo } from 'src/repository/entities/repository.entity';
import { RepositoryService } from 'src/repository/repository.service';
import { Repository } from 'typeorm';
import { UsersService } from './users.service';
import { Logger } from 'winston';

@Injectable()
export class CronService {
    constructor(
        private readonly userService: UsersService,
        @Inject('winston')
        private readonly logger: Logger,
        @InjectRepository(Repo)
        private userRepository: Repository<Repo>,
        private repositoryService: RepositoryService,
        ){
            this.repositoryService.fetchAllRepositories().then(data =>{
                if(!data){
                    this.logger.info("No repositories found in database fetching repositories");
                    this.fetchRepositories()
                }
            }).catch(err =>{
                this.logger.debug(err);
                throw new HttpException("Server Error",400)
            });
        }

    @Cron('0 1 * * *')
    async fetchRepositories(){
        console.log('Cron running')
        this.logger.info("Corn service started!")
        const repositories = await this.userService.fetchRepositories();
        if(repositories.length === 0){
            this.logger.debug("Repositories not found!");
            throw new NotFoundException("Repositories not found in database")
        }
        this.logger.info("Repositories fetched!");
        for(let i = 0; i < repositories.length; i++){
            repositories[i].map(repo=>{
                const data = {
                    id: repo.repositoryDetail.repositoryId,
                    repository_name: repo.repositoryDetail.repositoryName,
                    repository_url: repo.repositoryDetail.repositoryUrl,
                    username: repo.repositoryOwner,
                    email: repo.email,
                }
                this.userRepository.save(data);
            })
        }
        
        this.logger.info("Repositories fetched and stored into database")
    }
}
