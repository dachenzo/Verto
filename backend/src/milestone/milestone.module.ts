import { Module } from '@nestjs/common';
import { MilestoneService } from './milestone.service';
import { MilestoneController } from './milestone.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Milestone } from './milestone.entity';
import { UserModule } from 'src/user/user.module';
import { ProjectModule } from 'src/project/project.module';

@Module({
    providers: [MilestoneService],
    controllers: [MilestoneController],
    imports: [UserModule, ProjectModule, TypeOrmModule.forFeature([Milestone])],
    exports: [TypeOrmModule],
})
export class MilestoneModule {}
