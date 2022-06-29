import {
  CACHE_MANAGER,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cache } from 'cache-manager';
import { Repository } from 'typeorm';
import { Repo } from './entities/repository.entity';

@Injectable()
export class RepositoryService {
  constructor(
    @InjectRepository(Repo)
    private repositoryService: Repository<Repo>,
    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache,
  ) {}

  async getRepositories(user: any) {
    let repositories;
    repositories = await this.cacheManager.get('repositories');
    if (!repositories || repositories[0].email !== user.email) {
      const repository = await this.repositoryService.find({
        where: { email: user.email },
      });
      if (repository.length === 0) {
        throw new NotFoundException('No repositories found');
      }
      await this.cacheManager.set('repositories', repository, { ttl: 3600 });
      repositories = await this.cacheManager.get('repositories');
    }
    return {
      success: true,
      message: 'Fetched User Repositories',
      data: repositories,
    };
  }

  async fetchAllRepositories() {
    const result = await this.repositoryService.find();
    if (result.length === 0) {
      return false;
    } else {
      return true;
    }
  }
}
