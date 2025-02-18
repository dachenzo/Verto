export interface Task {
    taskId: number;

    title: string;

    description: string;

    type: "CALENDAR" | "DEADLINE";

    priority: "HIGH" | "LOW" | "MEDIUM";

    deadline: Date;

    startTime: Date;

    completed: boolean;

    endTime: Date;

    status: "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED";
}

export interface Milestone {
    milestoneId: number;

    title: string;

    description: string;

    completed: boolean;

    dueDate: Date;

    orderIndex: number;

    createdAt: Date;

    updatedAt: Date;

    tasks: Task[];
}

export interface Project {
    projectId: number;
    title: string;
    description?: string;
    priority?: "HIGH" | "LOW" | "MEDIUM";
    completed: boolean;
    dueDate?: string;
    createdAt: Date;
    updatedAt: Date;
    milestones?: Milestone[];
}
