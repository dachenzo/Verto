import { Module } from '@nestjs/common';
import { InvitationController } from './invitation.controller';
import { InvitationService } from './invitation.service';
import { MailModule } from 'src/mail/mail.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Invitation } from './invitation.entity';
import { ProjectUser } from 'src/project-user/projectUser.entity';
import { UserModule } from 'src/user/user.module';
import { Project } from 'src/project/project.entity';
import { ProjectModule } from 'src/project/project.module';
import { ProjectUserModule } from 'src/project-user/project-user.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
    controllers: [InvitationController],
    providers: [InvitationService],
    imports: [
        MailModule,
        ProjectModule,
        ProjectUserModule,
        TypeOrmModule.forFeature([Invitation, ProjectUser, Project]),
        UserModule,

        AuthModule,
    ],
})
export class InvitationModule {}
