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
    getTaskById(@Param('id') taskId: number, @Body() body: { userId: number }) {
        return this.taskService.getTaskById(taskId, body.userId);
    }

    // @Post()
    // createTask(@Body() body: CreateTaskDto) {
    //     return this.taskService.createTask(body);
    // }

    // @Patch('/:id')
    // updateTask(@Body() body: UpdateTaskDto, @Param('id') taskId: number) {
    //     return this.taskService.updateTask(body, taskId);
    // }

    @Delete('/:id')
    deleteTask(@Param('id') taskId: number, @Body() body: { userId: number }) {
        return this.taskService.deleteTask(taskId, body.userId);
    }
}
