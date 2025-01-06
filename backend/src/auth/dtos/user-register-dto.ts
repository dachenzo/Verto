import { IsString, MinLength } from 'class-validator';

export class UserRegisterDto {
    @IsString()
    email: string;

    @IsString()
    @MinLength(7, {
        message: 'Password must be at least 7 characters',
    })
    password: string;

    @IsString()
    username: string;
}
