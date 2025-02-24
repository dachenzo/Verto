import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { User } from 'src/user/user.entity';
import { JwtRedisService } from 'src/redis/jwt-redis.service';
import { Request } from 'express';

@Injectable()
export class AuthService {
    constructor(
        private jwtservice: JwtService,
        private userService: UserService,
        private jwtRedisService: JwtRedisService,
    ) {}

    async validateUser(email: string, password: string) {
        const user = await this.userService.getUserByEmail(email);

        if (!(await bcrypt.compare(password, user.password))) {
            throw new UnauthorizedException('Invalid Credentials');
        }

        return user;
    }
    //TODO: remove any from login parametyer tpye
    async login(userId: number, email: string, user: User) {
        const payload = { sub: userId, email: email };
        const accessToken = this.jwtservice.sign(payload, { expiresIn: '5m' });
        const refreshToken = this.jwtservice.sign(payload, { expiresIn: '7d' });
        const salt = await bcrypt.genSalt();
        const hashedRefreshToken = await bcrypt.hash(refreshToken, salt);

        user.refreshToken = hashedRefreshToken;
        await this.userService.saveUser(user);

        return {
            accessToken,
            refreshToken,
        };
    }

    async refreshToken(token: string) {
        const payload = this.jwtservice.verify(token, {
            secret: process.env.JWT_SECRET_KEY,
        });

        const user = await this.userService.getUserById(payload.sub);
        const { exp, iat, ...newPayload } = payload;

        if (!user) {
            throw new UnauthorizedException('Service error: Invalid User');
        }

        const isValid = await bcrypt.compare(token, user.refreshToken);
        if (!isValid) {
            throw new UnauthorizedException(
                'Service error: Invalid refresh token',
            );
        }

        await this.jwtRedisService.blackListToken(token, exp);

        const newAccessToken = this.jwtservice.sign(newPayload, {
            expiresIn: '5m',
        });
        const newRefreshToken = this.jwtservice.sign(newPayload, {
            expiresIn: '7d',
        });

        const salt = await bcrypt.genSalt();
        const hashedRefreshToken = await bcrypt.hash(newRefreshToken, salt);

        user.refreshToken = hashedRefreshToken;
        await this.userService.saveUser(user);

        return {
            accessToken: newAccessToken,
            refreshToken: newRefreshToken,
        };
    }

    async register(username: string, email: string, password: string) {
        const user = await this.userService.createUser(
            username,
            email,
            password,
        );

        return this.login(user.userId, user.email, user);
    }

    async isLoggedIn(request: Request) {
        const extractTokenFromCookie = (request: Request) => {
            const accessToken = request.cookies.accessToken;
            // console.log(`accessToken: ${accessToken}`);
            return accessToken;
        };

        const token = extractTokenFromCookie(request);

        if (!token) {
            return false;
        }

        try {
            const payload = this.jwtservice.verify(token, {
                secret: process.env.JWT_SECRET_KEY,
            });

            request.body.userId = payload.sub;
            return true;
        } catch (err) {
            return false;
        }
    }
}
