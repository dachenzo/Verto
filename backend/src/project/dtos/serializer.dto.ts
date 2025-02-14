import { Expose } from 'class-transformer';
import { Milestone } from 'src/milestone/milestone.entity';
import { Task } from 'src/tasks/task.entity';

export class ProjectSerializerDto {
    @Expose()
    projectId: number;

    @Expose()
    title: string;

    @Expose()
    description: string;

    @Expose()
    dueDate: Date;

    @Expose()
    completed: boolean;

    @Expose()
    createdAt: Date;

    @Expose()
    milestones: Milestone[];

    @Expose()
    priority: 'HIGH' | 'LOW' | 'MEDIUM';
}
