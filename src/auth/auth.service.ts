import { BadRequestException, Body, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDTO } from './dto/register.dto';
import * as bcryptjs from 'bcryptjs';
import { UserDTO } from './dto/user.dto';

@Injectable()
export class AuthService {

    constructor(private readonly userService: UsersService){
    }

    async register({rut, dv, name , lastName, email, password, phone, birthday}: RegisterDTO){
        
        const user = await this.userService.findOneByEmail(email);

        if(user){
            throw new BadRequestException('User already exists');
        }

        return await this.userService.create({
            rut, 
            dv, 
            name , 
            lastName, 
            email, 
            password: await bcryptjs.hash(password, 10), 
            phone, 
            birthday});
    }

    async login({email, password}: UserDTO){
        const user = await this.userService.findOneByEmail(email);
        if(!user){
            throw new UnauthorizedException('email is wrong');
        }
        
        const isPasswordValid = await await bcryptjs.hash(password, user.password);
        if(!isPasswordValid){
            throw new UnauthorizedException('password is wrong');
        }

        return user;
    }
}
