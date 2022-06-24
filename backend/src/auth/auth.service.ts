import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor (private userService: UsersService, private jwtService: JwtService){}
    
    async validateUser(email: string, password: string){
        const user = await this.userService.findOne(email);
        if(user && user.password === password){
            const {password, ...userDetail} = user;
            return userDetail;
        }
        return null;
    }
    async login(user: any){
        const payload = {email: user.email, id: user.id};
        return{
            access_token: this.jwtService.sign(payload),
        }
    }


}
