import {
    Body,
    Controller,
    NotFoundException,
    Post,
    UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserLoginDto } from './dtos/user-login-dto';
import { UserRegisterDto } from './dtos/user-register-dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('/login')
    async login(@Body() body: UserLoginDto) {
        const user = await this.authService.validateUser(
            body.email,
            body.password,
        );

        return this.authService.login(user.email, user.password);
    }

    @Post('/register')
    async register(@Body() body: UserRegisterDto) {
        return this.authService.register(
            body.username,
            body.email,
            body.password,
        );
    }
}
