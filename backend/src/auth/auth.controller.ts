import {
    Body,
    Controller,
    Get,
    Post,
    Req,
    Res,
    UnauthorizedException,
} from '@nestjs/common';
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
    @Get('/me')
    async me(@Req() request: Request) {
        const accessToken = request.cookies?.accessToken;

        if (!accessToken) {
            return 'NOT_LOGGED_IN';
        }

        try {
            const payload = this.jwtService.verify(accessToken, {
                secret: process.env.JWT_SECRET_KEY,
            });

            return { userId: payload.sub, email: payload.email };
        } catch (err) {
            throw new UnauthorizedException(
                ' I am the error Invalid or Expired Token',
            );
        }
    }

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

        console.log(`Login Access Token: ${accessToken}`);

        response.cookie('accessToken', accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 5 * 60 * 1000,
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
        console.log('I got to controller');
        const { accessToken, refreshToken } = await this.authService.register(
            body.username,
            body.email,
            body.password,
        );

        response.cookie('accessToken', accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 7 * 60 * 1000,
        });

        response.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        return { message: 'Login_successfully' };
    }

    @Post('/refresh')
    async refreshToken(
        @Req() request: Request,
        @Res({ passthrough: true }) response: Response,
    ) {
        const oldRefreshToken = request.cookies.refreshToken;
        const { accessToken, refreshToken } =
            await this.authService.refreshToken(oldRefreshToken);

        response.setHeader(
            'Cache-Control',
            'no-store, no-cache, must-revalidate, proxy-revalidate',
        );
        response.setHeader('Pragma', 'no-cache');
        response.setHeader('Expires', '0');

        response.cookie('accessToken', accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 7 * 60 * 1000,
            path: '/',
        });

        response.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            path: '/',
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        return { message: 'Login_successfully' };
    }

    @Get('/test')
    test() {
        return 'Working';
    }
}
