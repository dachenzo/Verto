import { Test, TestingModule } from '@nestjs/testing';
import { JwtRedisService } from './jwt-redis.service';

describe('JwtRedisService', () => {
    let service: JwtRedisService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [JwtRedisService],
        }).compile();

        service = module.get<JwtRedisService>(JwtRedisService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
