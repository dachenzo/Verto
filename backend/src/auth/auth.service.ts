import {
    Injectable,
    NotFoundException,
    UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { User } from 'src/user/user.entity';

@Injectable()
export class AuthService {
    constructor(
        private jwtservice: JwtService,
        private userService: UserService,
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
        const accessToken = this.jwtservice.sign(payload);
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
        const payload = this.jwtservice.verify(token);
        const user = await this.userService.getUserById(payload.sub);

        if (!user) {
            throw new UnauthorizedException('Invalid User');
        }

        const isValid = await bcrypt.compare(token, user.refreshToken);
        if (!isValid) {
            throw new UnauthorizedException('Invalid refresh token');
        }

        const newAccessToken = this.jwtservice.sign(payload);
        const newRefreshToken = this.jwtservice.sign(payload, {
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
}
