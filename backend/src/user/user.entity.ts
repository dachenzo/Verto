import { Project } from 'src/project/project.entity';
import { ProjectUser } from 'src/project/projectuser.entity';
import { Task } from 'src/tasks/task.entity';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    Index,
    ManyToMany,
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

    @OneToMany(() => ProjectUser, (projectUser) => projectUser.project)
    projectUsers: ProjectUser[];
}
