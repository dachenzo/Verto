import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { UserService } from 'src/user/user.service';
import { JwtRedisService } from 'src/redis/jwt-redis.service';
import 'dotenv/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        private userService: UserService,
        private redisService: JwtRedisService,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET_KEY, // TODO:key needs to be moved to env
        });
    }

    async validate(payload: any) {
        // need to change the names of the properties
        const user = await this.userService.getUserById(payload.sub);
        const token = ExtractJwt.fromAuthHeaderAsBearerToken()(payload);
        const isBlacklisted = await this.redisService.isTokenBlackListed(token);

        if (isBlacklisted) {
            throw new UnauthorizedException(' Session expired');
        }

        if (!user) {
            throw new UnauthorizedException('User not found');
        }

        return user;
    }
}
