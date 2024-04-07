import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDTO } from './dto/register.dto';
import * as bcryptjs from 'bcryptjs';

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

    login(){
        return 'login';
    }
}
