import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Repo } from './entities/repository.entity';
import { RepositoryService } from './repository.service';

@Module({
  imports:[TypeOrmModule.forFeature([Repo]),HttpModule],
  providers: [RepositoryService],
  exports: [RepositoryService]
})
export class RepositoryModule {}
