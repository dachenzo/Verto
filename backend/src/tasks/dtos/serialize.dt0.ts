import { Expose } from 'class-transformer';

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
    startTime: Date;

    @Expose()
    endTime: Date;
}
