import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtConstants } from './constants';
import { UserService } from 'src/user/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private userService: UserService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtConstants.secret, // TODO:key needs to be moved to env
        });
    }

    async validate(payload: any) {
        // need to change the names of the properties
        const user = await this.userService.getUserById(payload.sub);

        if (!user) {
            throw new UnauthorizedException('user nto found');
        }

        return user;
    }
}
