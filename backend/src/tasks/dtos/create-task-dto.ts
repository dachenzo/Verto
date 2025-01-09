import { Type } from 'class-transformer';
import {
    IsDate,
    IsEnum,
    IsNotEmpty,
    IsOptional,
    IsString,
    ValidateIf,
} from 'class-validator';

export enum TaskType {
    DEADLINE = 'DEADLINE',
    CALENDAR = 'CALENDAR',
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

    @ValidateIf((o) => o.type === 'DEADLINE')
    @IsNotEmpty()
    @Type(() => Date)
    @IsDate()
    deadline?: Date;

    @ValidateIf((o) => o.type === 'CALENDAR')
    @IsNotEmpty()
    @Type(() => Date)
    @IsDate()
    startTime?: Date;

    @ValidateIf((o) => o.type === 'CALENDAR')
    @IsNotEmpty()
    @Type(() => Date)
    @IsDate()
    endTime?: Date;

    @IsNotEmpty()
    userId: number;
}
