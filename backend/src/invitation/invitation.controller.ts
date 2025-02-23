import {
    Body,
    Controller,
    Get,
    HttpException,
    HttpStatus,
    Post,
    Query,
    Req,
    Res,
} from '@nestjs/common';
import { InvitationService } from './invitation.service';

@Controller('invitation')
export class InvitationController {
    constructor(private readonly invitationService: InvitationService) {}

    @Post('send')
    async sendInvitation(
        @Body() sendInvitationDto: SendInvitationDto,
        @Req() req: Request,
    ) {
        // Assuming the inviter is the authenticated user
        const inviter = req.user; // Make sure your auth guard populates this
        if (!inviter) {
            throw new HttpException(
                'Not authenticated',
                HttpStatus.UNAUTHORIZED,
            );
        }
        await this.invitationService.sendInvitation(
            sendInvitationDto.inviteeEmail,
            sendInvitationDto.projectId,
            inviter,
        );
        return { message: 'Invitation sent successfully' };
    }

    // --- Accept Invitation Endpoint ---
    @Get('accept')
    async acceptInvitation(
        @Query('token') token: string,
        @Query('projectId') projectId: string,
        @Req() req: Request,
        @Res() res: Response,
    ) {
        // Check if user is authenticated
        if (!req.user) {
            // Not logged in, so redirect to login, preserving the invitation data
            return res.redirect(
                `/login?inviteToken=${encodeURIComponent(
                    token,
                )}&projectId=${encodeURIComponent(projectId)}`,
            );
        }

        // User is authenticated; process the invitation
        try {
            await this.invitationService.acceptInvitation(
                token,
                projectId,
                req.user,
            );
            return res.redirect('/dashboard'); // Redirect after success
        } catch (error) {
            throw new HttpException(
                'Invalid or expired invitation',
                HttpStatus.BAD_REQUEST,
            );
        }
    }

    // --- Reject Invitation Endpoint ---
    @Get('reject')
    async rejectInvitation(
        @Query('token') token: string,
        @Query('projectId') projectId: string,
        @Res() res: Response,
    ) {
        try {
            await this.invitationService.rejectInvitation(token, projectId);
            return res.redirect('/feedback'); // Redirect to a feedback or info page
        } catch (error) {
            throw new HttpException(
                'Invalid or expired invitation',
                HttpStatus.BAD_REQUEST,
            );
        }
    }
}
