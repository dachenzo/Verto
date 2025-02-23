import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MailService } from 'src/mail/mail.service';
import { ProjectUser } from 'src/project-user/projectUser.entity';
import { Repository } from 'typeorm';
import { Invitation } from './invitation.entity';
import { UserService } from 'src/user/user.service';
import { ProjectUserService } from 'src/project-user/project-user.service';

@Injectable()
export class InvitationService {
    constructor(
        private mailService: MailService,
        @InjectRepository(Invitation)
        private InvitationRepo: Repository<Invitation>,
        private projectUserService: ProjectUserService,
        private userService: UserService,
    ) {}

    async sendInvitationMail(
        projectName: string,
        from: string,
        email: string,
        token: string,
    ) {
        const acceptUrl = `http://localhost:3000/invitation/accept?${token}`;
        const rejectUrl = `http://localhost:3000/invitation/reject?${token}`;

        const html = `<html>
                        <head>
                            <title>Project Invitation</title>
                        </head>
                        <body style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: 20px auto; padding: 20px;">
                            <div style="background-color: #f5f5f5; border-radius: 8px; padding: 20px;">
                                <h1 style="color: #333; margin-bottom: 20px;">Project Invitation</h1>
                                
                                <p style="color: #555; margin-bottom: 25px;">You have been invited to join ${projectName} by ${from}</p>
                                
                                <div style="text-align: center; margin-top: 30px;">
                                    <a href="${acceptUrl}" style="display: inline-block; background-color: #4CAF50; color: white; padding: 12px 30px; text-decoration: none; border-radius: 4px; margin-right: 15px; font-weight: bold;">Accept Invitation</a>
                                    
                                    <a href="${rejectUrl}" style="display: inline-block; background-color: #f44336; color: white; padding: 12px 30px; text-decoration: none; border-radius: 4px; font-weight: bold;">Decline Invitation</a>
                                </div>
                            </div>
                        </body>
                        </html>`;
        await this.mailService.sendMailTo(
            email,
            'Youre Being Invited to join our Project',
            html,
        );
    }

    async acceptInvitation(invitationToken: string, userId: number) {
        const invitation = await this.InvitationRepo.findOne({
            where: { token: invitationToken },
            relations: ['project', 'user'],
        });

        if (!invitation) {
            throw new NotFoundException('Invitation not found');
        }

        invitation.status = 'ACCEPTED';
        await this.InvitationRepo.save(invitation);

        await this.projectUserService.createProjectUser({
            projectId: invitation.project.projectId,
            userId: invitation.inviter.userId,
            projectRole: invitation.inviteeRole,
        });
    }

    async rejectInvitation(invitationToken: string) {
        const invitation = await this.InvitationRepo.findOne({
            where: { token: invitationToken },
        });

        if (!invitation) {
            throw new NotFoundException('Invitation not found');
        }

        invitation.status = 'REJECTED';
        await this.InvitationRepo.save(invitation);
    }
}
