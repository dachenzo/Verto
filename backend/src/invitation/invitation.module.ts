import { Module } from '@nestjs/common';
import { InvitationController } from './invitation.controller';
import { InvitationService } from './invitation.service';
import { MailModule } from 'src/mail/mail.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Invitation } from './invitation.entity';
import { ProjectUser } from 'src/project-user/projectUser.entity';
import { UserModule } from 'src/user/user.module';

@Module({
    controllers: [InvitationController],
    providers: [InvitationService],
    imports: [
        MailModule,
        TypeOrmModule.forFeature([Invitation, ProjectUser]),
        UserModule,
        ProjectUser,
    ],
})
export class InvitationModule {}
