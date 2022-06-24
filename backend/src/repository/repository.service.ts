import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Repo } from './entities/repository.entity';

@Injectable()
export class RepositoryService {
    constructor(
        @InjectRepository(Repo)
        private repositoryService: Repository<Repo>,
      ){}

      async getRepositories(user: any){
        const repository = await this.repositoryService.find({where: {email: user.email}});
        return repository;
      }
}
