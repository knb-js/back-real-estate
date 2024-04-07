import { Transform } from "class-transformer";
import { IsDateString, IsEmail, IsNumberString, IsString, MinLength } from "class-validator";

export class RegisterDTO{

    @Transform(({value})=>value.trim()) //Borra los espacios en blanco
    @IsNumberString()
    @MinLength(6)
    rut: number;
   
    @Transform(({value})=>value.trim())
    @IsString()
    dv:string;

    @Transform(({value})=>value.trim())  
    @IsString()
    @MinLength(3)
    name: string;

    @Transform(({value})=>value.trim())
    @IsString()
    @MinLength(3)
    lastName: string;

    @IsEmail()
    email: string;

    @Transform(({value})=>value.trim())
    @IsString()
    @MinLength(5)
    password: string;

    @Transform(({value})=>value.trim())
    @IsString()
    @MinLength(8)
    phone: string;

    @Transform(({value})=>value.trim())
    @IsDateString()
    birthday:string
    
}