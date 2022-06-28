import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { Logger } from 'winston';

@Injectable()
export class UsersService {
  constructor(
    private httpService: HttpService,
    @Inject('winston')
    private logger: Logger,
  ) {}

  private users = [
    {
      id: 1,
      email: 'davidson@ncompass.in',
      password: 'unlock',
      username: 'davidson-ncompass',
      accessToken: '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',
    },
    {
      id: 2,
      email: 'sowndaryakrishnan@ncompass.in',
      password: 'Krishnarem@27',
      username: 'krishna-ncompass',
      accessToken: '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',
    },
  ];

  async findOne(email: string) {
    return this.users.find((user) => user.email === email);
  }

  async fetchRepositories() {
    const repo = [];
    for (let i = 0; i < this.users.length; i++) {
      const url = `https://api.github.com/users/${this.users[i].username}/repos`;
      const response = await firstValueFrom(this.httpService.get(url));
      repo.push(await this.mapRepositories(response.data, this.users[i].email));
    }
    return repo;
  }

  async mapRepositories(res, userEmail) {
    const repo = [];
    for (let j = 0; j < res.length; j++) {
      const repoDetails = {
        repositoryOwner: res[j].owner.login,
        email: userEmail,
        repositoryDetail: {
          repositoryId: res[j].id,
          repositoryName: res[j].name,
          repositoryUrl: res[j].html_url
        },
      };
      repo.push(repoDetails);
    }
    return repo;
  }
}
