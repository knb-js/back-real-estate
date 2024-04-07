import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDTO } from './dto/register.dto';
import { UserDTO } from './dto/user.dto';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService:AuthService){}

    @Post('register')
    register(@Body() registerDTO : RegisterDTO){
        
        return this.authService.register(registerDTO);
    }

    @Post('login')
    login(@Body() userDTO : UserDTO){
        return this.authService.login(userDTO);
    }
}
