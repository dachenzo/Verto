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

        if (!user) {
            throw new NotFoundException('User not found');
        }

        if (!(await bcrypt.compare(password, user.password))) {
            throw new UnauthorizedException('Invalid Credentials');
        }
        const { username, ...result } = user;
        return result;
    }
    //TODO: remove any from login parametyer tpye
    async login(email: string, password: string) {
        const payload = { email: email, sub: password };
        return {
            access_token: this.jwtservice.sign(payload),
        };
    }

    async register(username: string, email: string, passwords: string) {
        const user = await this.userService.createUser(
            username,
            email,
            passwords,
        );

        return this.login(user.email, user.password);
    }
}
