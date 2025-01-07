import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class JwtRedisService implements OnModuleInit, OnModuleDestroy {
    private client: Redis;
    onModuleInit() {
        this.client = new Redis({
            host: 'localhost',
            port: 6379,
        });

        this.client.on('connect', () => {
            console.log('Connected to redis');
        });

        this.client.on('error', (err) => {
            console.log('Redis error: ', err);
        });
    }

    async blackListToken(token: string, exp: number) {
        const ttl = exp - Math.floor(Date.now() / 1000);
        if (ttl > 0) {
            await this.client.set(`blacklist_${token}`, 'true', 'EX', ttl);
        }
    }

    async isTokenBlackListed(token: string) {
        const result = await this.client.get(`blacklist_${token}`);
        return result !== null;
    }

    onModuleDestroy() {
        if (this.client) {
            this.client.quit();
        }
    }
}
