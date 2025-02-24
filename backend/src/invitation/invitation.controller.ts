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
    UseInterceptors,
} from '@nestjs/common';
import { InvitationService } from './invitation.service';
import { SendInvitationDto } from './dtos/send-invitation-dto';
import { InsertUserInterceptor } from 'src/interceptors/insert-userid.interceptor';
import { Public } from 'src/auth/decorators/public.decorator';
import { AuthService } from 'src/auth/auth.service';
import { Request, Response } from 'express';

@Controller('invitation')
@UseInterceptors(InsertUserInterceptor)
export class InvitationController {
    constructor(
        private readonly invitationService: InvitationService,
        private authService: AuthService,
    ) {}

    @Post('send')
    async sendInvitation(@Body() sendInvitationDto: SendInvitationDto) {
        await this.invitationService.createAndSendInvitation(sendInvitationDto);
        return { message: 'Invitation sent successfully' };
    }

    // --- Accept Invitation Endpoint ---
    @Public()
    @Get('accept')
    async acceptInvitation(
        @Query('invitationToken') token: string,
        @Req() req: Request,
        @Res() res: Response,
    ) {
        if (!this.authService.isLoggedIn(req)) {
            res.redirect(`http://localhost:5173?invitationToken=${token}`);
        }

        this.invitationService.acceptInvitation(token, req.body.userId);
    }

    // // --- Reject Invitation Endpoint ---
    // @Get('reject')
    // async rejectInvitation(
    //     @Query('token') token: string,
    //     @Query('projectId') projectId: string,
    //     @Res() res: Response,
    // ) {
    //     try {
    //         await this.invitationService.rejectInvitation(token, projectId);
    //         return res.redirect('/feedback'); // Redirect to a feedback or info page
    //     } catch (error) {
    //         throw new HttpException(
    //             'Invalid or expired invitation',
    //             HttpStatus.BAD_REQUEST,
    //         );
    //     }
    // }
}
