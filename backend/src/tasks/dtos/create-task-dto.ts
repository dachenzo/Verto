import { Type } from 'class-transformer';
import {
    IsDate,
    IsEnum,
    IsNotEmpty,
    IsOptional,
    IsString,
    ValidateIf,
} from 'class-validator';
import { IsFutureDate } from 'src/validators/is-future-date.validator';
import { IsValidEndTime } from '../decorators/is-valid-endtime';

export enum TaskType {
    DEADLINE = 'DEADLINE',
    CALENDAR = 'CALENDAR',
}

export enum Priorities {
    MEDIUM = 'MEDIUM',
    LOW = 'LOW',
    HIGH = 'HIGH',
}

export class CreateTaskDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsEnum(TaskType)
    @IsNotEmpty()
    type: TaskType;

    @IsOptional()
    priority: Priorities;

    @ValidateIf((o) => o.type === 'DEADLINE')
    @IsNotEmpty()
    @Type(() => Date)
    @IsDate()
    @IsFutureDate({ message: 'Deadline has to be a future date' })
    deadline?: Date;

    @ValidateIf((o) => o.type === 'CALENDAR')
    @IsNotEmpty()
    @Type(() => Date)
    @IsDate()
    @IsFutureDate({ message: 'Start time has to be a future date' })
    startTime?: Date;

    @ValidateIf((o) => o.type === 'CALENDAR')
    @IsNotEmpty()
    @Type(() => Date)
    @IsDate()
    @IsFutureDate({ message: 'End time has to be a future date' })
    @IsValidEndTime()
    endTime?: Date;

    @IsNotEmpty()
    userId: number;

    @IsNotEmpty()
    milestoneId: number;
}
