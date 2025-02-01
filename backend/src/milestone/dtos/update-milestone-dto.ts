import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { IsFutureDate } from 'src/validators/is-future-date.validator';

export class UpdateProjectDto {
    @IsOptional()
    @IsString()
    title: string;

    @IsString()
    @IsOptional()
    description: string;

    @IsOptional()
    completed: boolean;

    @IsOptional()
    @Type(() => Date)
    @IsDate()
    @IsFutureDate({ message: 'End time has to be a future date' })
    dueDate: Date;

    @IsNotEmpty()
    userId: number;

    @IsNotEmpty()
    projectId: number;
}
