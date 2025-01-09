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
    deadline?: Date;

    @ValidateIf((o) => o.type === 'CALENDAR')
    @IsOptional()
    @Type(() => Date)
    @IsDate()
    startTime?: Date;

    @ValidateIf((o) => o.type === 'CALENDAR')
    @IsOptional()
    @Type(() => Date)
    @IsDate()
    endTime?: Date;

    @IsNotEmpty()
    userId: number;
}
