import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
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
    console.log(repositories);
    if (repositories.length == 0 || repositories[0].email != user.email) {
      const repository = await this.repositoryService.find({
        where: { email: user.email },
      });
      console.log(repository);
      await this.cacheManager.set('repositories', repository, { ttl: 100000 });

      repositories = await this.cacheManager.get('repositories');
      console.log('Cache not hit');
    }

    return repositories;
  }
}
