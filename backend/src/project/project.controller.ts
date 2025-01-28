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
import { ProjectService } from './project.service';
import { InsertUserInterceptor } from 'src/interceptors/insert-userid.interceptor';
import { CreateProjectDto } from './dtos/create-project-dto';
import { UpdateProjectDto } from './dtos/update-project-dto';
import { Serializer } from 'src/interceptors/serialize.interceptor';
import { ProjectSerializerDto } from './dtos/serializer.dto';

@Controller('project')
@UseInterceptors(InsertUserInterceptor)
@Serializer(ProjectSerializerDto)
export class ProjectController {
    constructor(private projectService: ProjectService) {}

    @Get()
    getAllProjects(@Body() body: { userId: number }) {
        return this.projectService.getAllProjects(body);
    }

    @Get('/:id')
    getProjectById(
        @Param('id') projectId: number,
        @Body() body: { userId: number },
    ) {
        return this.projectService.getProjectByid(projectId, body.userId);
    }

    @Post()
    creteProject(@Body() body: CreateProjectDto) {
        this.projectService.createProject(body);
    }

    @Patch('/:id')
    updateProject(
        @Body() body: UpdateProjectDto,
        @Param('id') projectId: number,
    ) {
        this.projectService.updateProject(body);
    }

    @Delete('/:id')
    deleteProject(
        @Param('id') projectId: number,
        @Body() body: { userId: number },
    ) {
        this.projectService.deleteProject(projectId, body.userId);
    }
}
