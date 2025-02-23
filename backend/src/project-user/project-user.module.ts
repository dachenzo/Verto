import { Module } from '@nestjs/common';
import { ProjectUserController } from './project-user.controller';
import { ProjectUserService } from './project-user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectUser } from './projectUser.entity';
import { UserModule } from 'src/user/user.module';
import { ProjectModule } from 'src/project/project.module';

@Module({
    controllers: [ProjectUserController],
    providers: [ProjectUserService],
    imports: [
        TypeOrmModule.forFeature([ProjectUser]),
        UserModule,
        ProjectModule,
    ],
    exports: [TypeOrmModule, ProjectUserService],
})
export class ProjectUserModule {}
