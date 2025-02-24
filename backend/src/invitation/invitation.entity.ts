import { ProjectRole } from 'src/project-user/projectUser.entity';
import { Project } from 'src/project/project.entity';
import { User } from 'src/user/user.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    Generated,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';

type InvitationStatus = 'PENDING' | 'ACCEPTED' | 'REJECTED';
@Entity()
export class Invitation {
    @PrimaryGeneratedColumn()
    invitationId: number;

    @Column()
    senderEmail: string;

    @ManyToOne(() => Project, (project) => project.invitations)
    project: Project;

    @Column()
    inviteeRole: ProjectRole;

    @ManyToOne(() => User, (user) => user.invitations)
    inviter: User;

    @Column({ default: 'PENDING' })
    status: InvitationStatus;

    @Column({ type: 'uuid', unique: true })
    @Generated('uuid')
    token: string;

    @CreateDateColumn()
    createdAt: Date;

    @Column({ type: 'timestamp', nullable: true })
    expiresAt: Date;
}
