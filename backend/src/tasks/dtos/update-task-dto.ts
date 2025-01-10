import {
    IsDate,
    IsEnum,
    IsNotEmpty,
    IsOptional,
    IsString,
    ValidateIf,
} from 'class-validator';

import { TaskType } from './create-task-dto';
import { Type } from 'class-transformer';
import { IsValidTaskType } from '../decorators/is-valid-task-type.decorator';
import { IsFutureDate } from 'src/validators/is-future-date.validator';

export class UpdateTaskDto {
    @IsString()
    @IsOptional()
    title: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsEnum(TaskType)
    @IsNotEmpty()
    @IsValidTaskType()
    type: TaskType;

    @ValidateIf((o) => o.type === 'DEADLINE')
    @IsOptional()
    @Type(() => Date)
    @IsDate()
    @IsFutureDate({ message: 'Deadline has to be a future date' })
    deadline?: Date;

    @ValidateIf((o) => o.type === 'CALENDAR')
    @IsOptional()
    @Type(() => Date)
    @IsDate()
    @IsFutureDate({ message: 'Start time has to be a future date' })
    startTime?: Date;

    @ValidateIf((o) => o.type === 'CALENDAR')
    @IsOptional()
    @Type(() => Date)
    @IsDate()
    @IsFutureDate({ message: 'End time has to be a future date' })
    endTime?: Date;

    @IsNotEmpty()
    userId: number;
}
