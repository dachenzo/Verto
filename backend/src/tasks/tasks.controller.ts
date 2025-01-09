import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    UseInterceptors,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dtos/create-task-dto';
import { UpdateTaskDto } from './dtos/update-task-dto';
import { InsertUserInterceptor } from 'src/interceptors/insert-userid.interceptor';

@UseInterceptors(InsertUserInterceptor)
@Controller('/tasks')
export class TasksController {
    constructor(private taskService: TasksService) {}
    @Get()
    getAllTasks() {
        return this.taskService.getAlltasks();
    }

    @Get('/:id')
    getTaskById(@Param('id') taskId: number) {
        return this.taskService.getTaskById(taskId);
    }

    @Post()
    createTask(@Body() body: CreateTaskDto) {
        console.log(body);
        return this.taskService.createTask(body);
    }

    @Patch('/:id')
    updateTask(@Body() body: UpdateTaskDto, @Param('id') taskId: number) {
        console.log(body);
        return this.taskService.updateTask(body, taskId);
    }

    @Delete('/:id')
    deleteTask(@Param('id') taskId: number) {
        return this.taskService.deleteTask(taskId);
    }
}
