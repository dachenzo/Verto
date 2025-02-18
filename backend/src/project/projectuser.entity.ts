import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Project } from './project.entity';
import { User } from 'src/user/user.entity';

export enum ProjectRole {
    OWNER = 'OWNER',
    ADMIN = 'ADMIN',
    COLLABORATOR = 'COLLABORATOR',
}

@Entity()
export class ProjectUser {
    @PrimaryGeneratedColumn()
    projectUserId: number;

    @ManyToOne(() => Project, (project) => project.projectUsers, {
        nullable: false,
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'projectId' })
    project: Project;

    @ManyToOne(() => User, (user) => user.projectUsers, {
        nullable: false,
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'userId' })
    user: User;

    @Column({
        type: 'enum',
        enum: ProjectRole,
        default: ProjectRole.COLLABORATOR,
    })
    role: ProjectRole;
}
