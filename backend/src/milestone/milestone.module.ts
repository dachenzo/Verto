import { Module } from '@nestjs/common';
import { MilestoneService } from './milestone.service';
import { MilestoneController } from './milestone.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Milestone } from './milestone.entity';

@Module({
    providers: [MilestoneService],
    controllers: [MilestoneController],
    imports: [TypeOrmModule.forFeature([Milestone])],
})
export class MilestoneModule {}
