import { Project } from 'src/project/project.entity';
import { Task } from 'src/tasks/task.entity';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    Index,
} from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    userId: number;

    @Column()
    username: string;

    @Column({ unique: true })
    @Index()
    email: string;

    @Column()
    password: string;

    @Column({ nullable: true })
    refreshToken: string;

    @OneToMany(() => Task, (task) => task.user, { cascade: true })
    tasks: Task[];

    @OneToMany(() => Project, (project) => project.user, { cascade: true })
    projects: Project[];
}
