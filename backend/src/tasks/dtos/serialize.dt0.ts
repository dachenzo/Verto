import { Expose } from 'class-transformer';
import { Priorities } from './create-task-dto';

export class TaskSerializerDto {
    @Expose()
    taskId: number;

    @Expose()
    title: string;

    @Expose()
    description: string;

    @Expose()
    type: 'CALENDAR' | 'DEADLINE';

    @Expose()
    deadline: Date;

    @Expose()
    priority: Priorities;

    @Expose()
    startTime: Date;

    @Expose()
    endTime: Date;
}
