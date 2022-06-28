import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WinstonModule } from 'nest-winston';
import { Repo } from 'src/repository/entities/repository.entity';
import { RepositoryModule } from 'src/repository/repository.module';
import * as winston from 'winston';
import { CronService } from './cron.service';
import { UsersService } from './users.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Repo]),
    WinstonModule.forRoot({
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
      ),
      transports: [
        new winston.transports.File({
          dirname: './log',
          filename: 'info.log',
          level: 'info',
        }),
        new winston.transports.File({
          dirname: './log',
          filename: 'debug.log',
          level: 'debug',
        }),
        new winston.transports.File({
          dirname: './log',
          filename: 'error.log',
          level: 'error',
        }),
      ],
    }),
    HttpModule,
    ScheduleModule.forRoot(),
    RepositoryModule,
  ],
  providers: [UsersService, CronService],
  exports: [UsersService],
})
export class UsersModule {}
