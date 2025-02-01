import { Milestone } from 'src/milestone/milestone.entity';
import { MilestoneModule } from 'src/milestone/milestone.module';
import { Project } from 'src/project/project.entity';
import { User } from 'src/user/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    taskId: number;

    @Column()
    title: string;

    @Column({ nullable: true })
    description: string;

    @Column({ type: 'enum', enum: ['DEADLINE', 'CALENDAR'] })
    type: 'CALENDAR' | 'DEADLINE';

    @Column({ nullable: true })
    priority: 'HIGH' | 'LOW' | 'MEDIUM';

    @Column({ nullable: true })
    deadline: Date;

    @Column({ nullable: true })
    startTime: Date;

    @Column({ nullable: true })
    endTime: Date;

    @Column({ default: 'NOT_STARTED' })
    status: 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED';

    @ManyToOne(() => Project, (project) => project.tasks, {
        nullable: true,
        onDelete: 'CASCADE',
    })
    project: Project;

    @ManyToOne(() => Milestone, (milestone) => milestone.tasks, {
        nullable: true,
        onDelete: 'CASCADE',
    })
    milestone: Milestone;

    @ManyToOne(() => User, (user) => user.tasks, { onDelete: 'CASCADE' })
    user: User;
}
