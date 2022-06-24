import { CacheModule, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { Repo } from './repository/entities/repository.entity';
import { RepositoryModule } from './repository/repository.module';
import { UsersModule } from './users/users.module';
import * as redisStore from 'cache-manager-redis-store'

@Module({
  imports: [
    CacheModule.register({
      store: redisStore,
      socket:{
        host: 'localhost',
        port: 6379
      }
    }),
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port:3306,
    username: 'root',
    password: 'unlock',
    database: 'nestjs',
    entities: [Repo],
    synchronize: true
  }),UsersModule, RepositoryModule,  AuthModule, JwtModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
