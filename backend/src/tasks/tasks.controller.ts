import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dtos/create-task-dto';

@Controller('/tasks')
export class TasksController {
    constructor(private taskService: TasksService) {}
    @Get()
    getAllTasks() {
        return this.taskService.getAlltasks();
    }

    @Get('/:id')
    getTaskById(@Param('id') id: number) {
        return this.taskService.getTaskById(id);
    }

    @Post()
    createTask(@Body() body: CreateTaskDto) {
        const task = this.taskService.createTask(body.title, body.description);
        return task;
    }
}
