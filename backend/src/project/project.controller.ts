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
// @Serializer(ProjectSerializerDto)
export class ProjectController {
    constructor(private projectService: ProjectService) {}

    @Get()
    async getAllProjects(@Body() body: { userId: number }) {
        return await this.projectService.getAllProjects(body);
    }

    @Get('/:id')
    async getProjectById(
        @Param('id') projectId: number,
        @Body() body: { userId: number },
    ) {
        const project = await this.projectService.getProjectByid(
            projectId,
            body.userId,
        );

        return project;
    }

    @Post()
    async creteProject(@Body() body: CreateProjectDto) {
        return await this.projectService.createProject(body);
    }

    @Patch('/:id')
    async updateProject(
        @Body() body: UpdateProjectDto,
        @Param('id') projectId: number,
    ) {
        await this.projectService.updateProject(body, projectId);
        return;
    }

    @Delete('/:id')
    async deleteProject(
        @Param('id') projectId: number,
        @Body() body: { userId: number },
    ) {
        await this.projectService.deleteProject(projectId, body.userId);
        return;
    }
}
