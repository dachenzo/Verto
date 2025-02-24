import { IsEmail, IsEnum, IsNotEmpty } from 'class-validator';
import { ProjectRole } from 'src/project-user/projectUser.entity';

export class SendInvitationDto {
    @IsNotEmpty()
    projectId: number;

    @IsNotEmpty()
    userId: number;

    @IsNotEmpty()
    @IsEnum(ProjectRole)
    role: ProjectRole;

    @IsNotEmpty()
    @IsEmail()
    inviteeEmail: string;
}
