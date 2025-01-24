import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserLoginDto } from './dtos/user-login-dto';
import { UserRegisterDto } from './dtos/user-register-dto';
import { JwtRedisService } from 'src/redis/jwt-redis.service';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { Public } from './decorators/public.decorator';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
        private redisService: JwtRedisService,
        private jwtService: JwtService,
    ) {}

    @Public()
    @Post('/login')
    async login(
        @Res({ passthrough: true }) response: Response,
        @Body() body: UserLoginDto,
    ) {
        const user = await this.authService.validateUser(
            body.email,
            body.password,
        );

        const { accessToken, refreshToken } = await this.authService.login(
            user.userId,
            user.email,
            user,
        );

        response.cookie('accessToken', accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 15 * 60 * 1000,
        });

        response.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        return { message: 'Login_successfully' };
    }

    @Post('/logout')
    async logOut(
        @Req() request: Request,
        @Res({ passthrough: true }) response: Response,
    ) {
        const refreshToken = request.cookies.refreshToken;
        response.clearCookie('refreshToken', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'Production',
            sameSite: true,
        });

        response.clearCookie('accessToken', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'Production',
            sameSite: true,
        });

        const payload = this.jwtService.decode(refreshToken);
        const exp = payload.exp;
        await this.redisService.blackListToken(refreshToken, exp);
        return { message: 'Successfully Logged Out' };
    }

    @Public()
    @Post('/register')
    async register(
        @Body() body: UserRegisterDto,
        @Res({ passthrough: true }) response: Response,
    ) {
        const { accessToken, refreshToken } = await this.authService.register(
            body.username,
            body.email,
            body.password,
        );

        response.cookie('accessToken', accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 15 * 60 * 1000,
        });

        response.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        return { message: 'Login_successfully' };
    }

    @Public()
    @Post('/refresh')
    async refreshToken(
        @Req() request: Request,
        @Res({ passthrough: true }) response: Response,
    ) {
        const oldRefreshToken = request.cookies.refreshToken;
        const { accessToken, refreshToken } =
            await this.authService.refreshToken(oldRefreshToken);

        response.cookie('accessToken', accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 15 * 60 * 1000,
        });

        response.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        return { message: 'Login_successfully' };
    }

    @Get('/test')
    test() {
        return 'Working';
    }
}
