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
import { Serializer } from 'src/interceptors/serialize.interceptor';
import { TaskSerializerDto } from './dtos/serialize.dt0';

@UseInterceptors(InsertUserInterceptor)
@Serializer(TaskSerializerDto)
@Controller('/tasks')
export class TasksController {
    constructor(private taskService: TasksService) {}
    // @Get()
    // getAllTasks(@Body() body: { userId: number }) {
    //     return this.taskService.getAlltasks(body);
    // }

    @Get('/:id')
    async getTaskById(
        @Param('id') taskId: number,
        @Body() body: { userId: number },
    ) {
        return await this.taskService.getTaskById(taskId, body.userId);
    }

    @Post()
    async createTask(@Body() body: CreateTaskDto) {
        return await this.taskService.createTask(body);
    }

    @Patch('/:id')
    async updateTask(@Body() body: UpdateTaskDto, @Param('id') taskId: number) {
        return await this.taskService.updateTask(taskId, body);
    }

    @Delete('/:id')
    async deleteTask(
        @Param('id') taskId: number,
        @Body() body: { userId: number },
    ) {
        return await this.taskService.deleteTask(taskId, body.userId);
    }
}
