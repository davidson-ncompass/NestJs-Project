import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import { Repo } from 'src/repository/entities/repository.entity';
import { Repository } from 'typeorm';
import { UsersService } from './users.service';

@Injectable()
export class CronService {
    constructor(
        private readonly userService: UsersService,
        @InjectRepository(Repo)
        private userRepository: Repository<Repo>,
        ){}
    

    @Cron('0 1 * * *')
    async fetchRepositories(){
        const repositories = await this.userService.fetchRepositories();
        repositories.map(repo=>{
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
}
