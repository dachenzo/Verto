import { IsOptional, IsEmail, IsString } from 'class-validator';

export class UpdateUserDto {
    @IsEmail()
    @IsOptional()
    email: string;

    @IsString()
    @IsOptional()
    username: string;

    @IsString()
    @IsOptional()
    password: string;
}
