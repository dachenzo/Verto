import { Project } from 'src/project/project.entity';
import { Task } from 'src/tasks/task.entity';
import {
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    ManyToOne,
    Entity,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Milestone {
    @PrimaryGeneratedColumn()
    milestoneId: number;

    @Column()
    title: string;

    @Column({ nullable: true })
    description: string;

    @Column({ default: false })
    completed: boolean;

    @Column({ nullable: true })
    dueDate: Date;

    @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
    orderIndex: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(() => Task, (task) => task.milestone, { cascade: true })
    tasks: Task[];

    @ManyToOne(() => Project, (project) => project.milestone, {
        onDelete: 'CASCADE',
    })
    project: Project;
}
