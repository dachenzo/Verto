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

    @OneToMany(() => Task, (task) => task.user, { cascade: true })
    tasks: Task[];
}
