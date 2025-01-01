import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserService {
    getUserById(id: number) {
        const users = {
            1: {
                displayname: 'john_doe',
                email: 'john.doe@example.com',
                password: 'SecurePass123',
            },
            2: {
                displayname: 'jane_smith',
                email: 'jane.smith@example.com',
                password: 'Passw0rd!',
            },
            3: {
                displayname: 'dev_guru',
                email: 'dev.guru@example.com',
                password: 'Dev12345',
            },
            4: {
                displayname: 'frontend_fanatic',
                email: 'frontend@example.com',
                password: 'ReactRocks!1',
            },
            5: {
                displayname: 'backend_builder',
                email: 'backend@example.com',
                password: 'NestIsBest123',
            },
            6: {
                displayname: 'taskmaster',
                email: 'task.master@example.com',
                password: 'TaskItUp2024',
            },
            7: {
                displayname: 'bug_hunter',
                email: 'bug.hunter@example.com',
                password: 'FixItFast9',
            },
            8: {
                displayname: 'admin_user',
                email: 'admin@example.com',
                password: 'Admin#123',
            },
            9: {
                displayname: 'beta_tester',
                email: 'beta.tester@example.com',
                password: 'BetaTest567',
            },
            10: {
                displayname: 'project_manager',
                email: 'pm@example.com',
                password: 'ManageThis!',
            },
        };
        return users[id];
    }

    createUser(displayname: string, email: string, password: string) {
        const newUser = {
            id: uuidv4(),
            displayname,
            email,
            password,
        };
        console.log('User Succesfully created');
        return newUser;
    }
}
