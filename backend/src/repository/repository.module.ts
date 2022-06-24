import { HttpModule } from '@nestjs/axios';
import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Repo } from './entities/repository.entity';
import { RepositoryService } from './repository.service';
import * as redisStore from 'cache-manager-redis-store'

@Module({
  imports:[CacheModule.register({
    store: redisStore,
      socket:{
        host: 'localhost',
        port: 6379
      }
  }),TypeOrmModule.forFeature([Repo]),HttpModule],
  providers: [RepositoryService],
  exports: [RepositoryService]
})
export class RepositoryModule {}
