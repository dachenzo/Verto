import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { UserModule } from 'src/user/user.module';
import { RedisModule } from 'src/redis/redis.module';
import { AuthCoreModule } from 'src/auth-core/auth-core.module';

//TODO: probably need the user module here
@Module({
    providers: [AuthService, JwtStrategy],
    controllers: [AuthController],
    imports: [PassportModule, RedisModule, UserModule, AuthCoreModule],
    exports: [AuthService],
})
export class AuthModule {}
