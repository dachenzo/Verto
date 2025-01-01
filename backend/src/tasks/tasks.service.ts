import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TasksService {
    createTask(title: string, description: string) {
        const id = uuidv4();
        const task = {
            id,
            title,
            description,
        };
        console.log('Task created and saved');
        return task;
    }

    getAlltasks() {
        const tasks = {
            1: {
                id: 1,
                title: 'Design Homepage',
                description:
                    'Create wireframes and design the homepage layout.',
            },
            2: {
                id: 2,
                title: 'Implement Authentication',
                description: 'Set up user login and registration using JWT.',
            },
            3: {
                id: 3,
                title: 'Database Schema',
                description:
                    'Design the initial database schema for tasks and users.',
            },
            4: {
                id: 4,
                title: 'Frontend Setup',
                description:
                    'Initialize React app and configure routing with React Router.',
            },
            5: {
                id: 5,
                title: 'Task API Integration',
                description:
                    'Connect frontend to backend task API for CRUD operations.',
            },
            6: {
                id: 6,
                title: 'UI Testing',
                description:
                    'Write unit and integration tests for key components.',
            },
            7: {
                id: 7,
                title: 'Notification System',
                description:
                    'Implement email and push notifications for task reminders.',
            },
            8: {
                id: 8,
                title: 'Deploy Application',
                description:
                    'Deploy frontend and backend to production environment.',
            },
            9: {
                id: 9,
                title: 'User Profile Page',
                description:
                    'Develop a user profile page to manage account settings.',
            },
            10: {
                id: 10,
                title: 'Bug Fixes',
                description: 'Address bugs reported during beta testing phase.',
            },
        };

        return tasks;
    }

    getTaskById(id: number) {
        return this.getAlltasks()[id];
    }
}
