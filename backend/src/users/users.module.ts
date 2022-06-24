import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Repo } from 'src/repository/entities/repository.entity';
import { RepositoryModule } from 'src/repository/repository.module';
import { CronService } from './cron.service';
import { UsersService } from './users.service';

@Module({
  imports:[TypeOrmModule.forFeature([Repo]),HttpModule, ScheduleModule.forRoot(), RepositoryModule],
  providers: [UsersService,CronService],
  exports: [UsersService]
})
export class UsersModule {}
