import { Task } from 'src/tasks/task.entity';
import { User } from 'src/user/user.entity';
import {
    Column,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Project {
    @PrimaryGeneratedColumn()
    projectId: number;

    @Column()
    title: string;

    @Column({ nullable: true })
    description: string;

    @Column({ nullable: true })
    priority: 'HIGH' | 'LOW' | 'MEDIUM';

    @Column({ default: false })
    completed: boolean;

    @Column({ nullable: true })
    dueDate: Date;

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @OneToMany(() => Task, (task) => task.project, { cascade: true })
    tasks: Task[];

    @ManyToOne(() => User, (user) => user.projects, { onDelete: 'CASCADE' })
    user: User;
}
