import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule, JwtService } from '@nestjs/jwt';

import 'dotenv/config';

@Module({
    imports: [
        ConfigModule,
        JwtModule.register({
            secret: process.env.JWT_SECRET_KEY,
            signOptions: { expiresIn: '1h' },
        }),
    ],
    exports: [JwtModule],
})
export class AuthCoreModule {}
