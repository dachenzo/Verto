import {
    Body,
    Controller,
    Get,
    Param,
    Patch,
    Post,
    UseInterceptors,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dtos/create-task-dto';
import {
    UpdateCalendarTaskDto,
    UpdateDeadlineTaskDto,
} from './dtos/update-task-dto';
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
    getTaskById(@Param('id') id: number) {
        return this.taskService.getTaskById(id);
    }

    @Post()
    createDeadlineTask(@Body() body: CreateTaskDto) {
        console.log(body);
        return this.taskService.createTask(body);
    }

    @Patch('/:id')
    updateTask(@Body() body: UpdateDeadlineTaskDto | UpdateCalendarTaskDto) {
        console.log(body);
        return this.taskService.updateTask(body);
    }
}
