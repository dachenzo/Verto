import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { IsFutureDate } from 'src/validators/is-future-date.validator';

export class CreateProjectDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsOptional()
    priority: 'HIGH' | 'LOW' | 'MEDIUM';

    @IsOptional()
    @Type(() => Date)
    @IsDate()
    @IsFutureDate({ message: 'Start time has to be a future date' })
    dueDate: Date;

    @IsNotEmpty()
    userId: number;
}
