import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserLoginDto } from './dtos/user-login-dto';
import { UserRegisterDto } from './dtos/user-register-dto';
import { JwtRedisService } from 'src/redis/jwt-redis.service';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { Public } from './decorators/public.decorator';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
        private redisService: JwtRedisService,
        private jwtService: JwtService,
    ) {}

    @Public()
    @Post('/login')
    async login(@Body() body: UserLoginDto) {
        const user = await this.authService.validateUser(
            body.email,
            body.password,
        );

        return this.authService.login(user.email, user.password);
    }

    @Post('/logout')
    async logOut(@Req() request: Request) {
        const authHeader = request.headers.authorization;
        const token = authHeader.split(' ')[1];

        const payload = this.jwtService.decode(token);
        const exp = payload.exp;
        await this.redisService.blackListToken(token, exp);
        return { message: 'Successfully Logged Out' };
    }

    @Public()
    @Post('/register')
    async register(@Body() body: UserRegisterDto) {
        return this.authService.register(
            body.username,
            body.email,
            body.password,
        );
    }

    @Get('/test')
    test() {
        return 'Working';
    }
}