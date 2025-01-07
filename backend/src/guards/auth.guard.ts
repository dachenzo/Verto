import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';

import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';
import { JwtRedisService } from 'src/redis/jwt-redis.service';
import { jwtConstants } from 'src/auth/constants'; //TODO: nedds to go
import { NO_GUARD } from 'src/auth/decorators/public.decorator';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private readonly jwtService: JwtService,
        private readonly redisService: JwtRedisService,
        private reflector: Reflector,
    ) {}

    async canActivate(context: ExecutionContext) {
        const isPublic = this.reflector.getAllAndOverride<boolean>(NO_GUARD, [
            context.getHandler(),
            context.getClass(),
        ]);

        if (isPublic) {
            return true;
        }

        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);
        // console.log('Token: ', token);

        if (!token) {
            throw new UnauthorizedException('Authorization Token not found');
        }

        try {
            const payload = this.jwtService.verify(token, {
                secret: jwtConstants.secret,
            });

            const isBlacklisted =
                await this.redisService.isTokenBlackListed(token);

            if (isBlacklisted) {
                console.log('Blacklisted');
                throw new UnauthorizedException('Token is blacklisted');
            }

            request.user = payload;
            return true;
        } catch (err) {
            throw new UnauthorizedException('Invalid or expired token');
        }
    }

    extractTokenFromHeader(request: Request) {
        const authHeader = request.headers.authorization as String | undefined;

        if (!authHeader) {
            return null;
        }

        const [type, token] = authHeader.split(' ');
        return type === 'Bearer' ? token : null;
    }
}
