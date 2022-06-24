import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    constructor(
        private httpService: HttpService,
    ){}

    private users =[{
        id: 1,
        email: 'davidson@ncompass.in',
        password: "unlock",
        username: 'davidson-ncompass',
        accessToken: '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'
    },
    {
        id:2,
        email:'sowndaryakrishnan@ncompass.inc',
        password: 'Krishnarem@27',
        username: 'krishna-ncompass',
        accessToken: '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'
    }
    ]
      
        async findOne(email: string){
            return this.users.find(user => user.email === email);
        }

        async fetchRepositories(){
            let repo = []
            for(let i = 0; i < this.users.length; i++){
                const url = `https://api.github.com/users/${this.users[i].username}/repos`;
                await this.httpService.get(url).toPromise()
                .then(res =>{
                    for(let j = 0; j < res.data.length; j++){
                        const repoDetails = {
                            repositoryOwner: res.data[j].owner.login,
                            email: this.users[i].email,
                            repositoryDetail:{
                                repositoryId: res.data[j].id,
                                repositoryName: res.data[j].name,
                                repositoryUrl: res.data[j].owner.repos_url
                            }
                        }
                        repo.push(repoDetails);
                    }
                }
                ).catch(err => console.log(err))
            }
            return repo;
        }


}
