import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDTO } from './dto/register.dto';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService:AuthService){}

    @Post('register')
    register(@Body() registerDTO : RegisterDTO){
        
        return this.authService.register(registerDTO);
    }

    @Post('login')
    login(){
        return this.authService.login();
    }
}
