import { IsString } from 'class-validator';

export class CreateUserDto {
    @IsString()
    displayname: string;

    @IsString()
    email: string;

    @IsString()
    password: string;
}
