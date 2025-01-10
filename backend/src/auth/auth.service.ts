import {
    Injectable,
    NotFoundException,
    UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';

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
    async login(userId: number, email: string) {
        const payload = { sub: userId, email: email };
        const access_token = this.jwtservice.sign(payload);
        return {
            access_token,
        };
    }

    async register(username: string, email: string, password: string) {
        const user = await this.userService.createUser(
            username,
            email,
            password,
        );

        return this.login(user.userId, user.email);
    }
}
