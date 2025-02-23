import { Milestone } from 'src/milestone/milestone.entity';
import { Task } from 'src/tasks/task.entity';

import {
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { ProjectUser } from 'src/project-user/projectUser.entity';
import { Invitation } from 'src/invitation/invitation.entity';

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

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(() => Task, (task) => task.project, { cascade: true })
    tasks: Task[];

    @OneToMany(() => Milestone, (milestone) => milestone.project, {
        cascade: true,
    })
    milestones: Milestone[];

    @OneToMany(() => ProjectUser, (projectUser) => projectUser.project)
    projectUsers: ProjectUser[];

    @OneToMany(() => Invitation, (invitation) => invitation.project)
    invitations: Invitation[];
}
