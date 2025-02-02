import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './project.entity';
import { UserModule } from 'src/user/user.module';
import { ProjectUser } from './projectuser.entity';

@Module({
    providers: [ProjectService],
    controllers: [ProjectController],
    imports: [UserModule, TypeOrmModule.forFeature([Project, ProjectUser])],
    exports: [TypeOrmModule],
})
export class ProjectModule {}
