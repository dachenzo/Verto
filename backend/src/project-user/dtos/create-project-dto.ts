import { IsEmail, IsNotEmpty } from 'class-validator';
import { ProjectRole } from '../projectUser.entity';

export class CreateProjectUserDto {
    @IsNotEmpty()
    userId: number;

    @IsNotEmpty()
    projectId: number;

    @IsNotEmpty()
    projectRole: ProjectRole;
}
