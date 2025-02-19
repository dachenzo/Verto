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
import { MilestoneService } from './milestone.service';
import { InsertUserInterceptor } from 'src/interceptors/insert-userid.interceptor';
import { CreateMilestoneDto } from './dtos/create-milestone-dto';
import { UpdateMilestoneDto } from './dtos/update-milestone-dto';

@Controller('milestone')
@UseInterceptors(InsertUserInterceptor)
export class MilestoneController {
    constructor(private milestoneService: MilestoneService) {}

    @Get()
    async getAllMilestones(
        @Body() body: { userId: number; projectId: number },
    ) {
        return await this.milestoneService.getAllMilestones(
            body.userId,
            body.projectId,
        );
    }

    @Get('/:id')
    getMilestoneById(
        @Param('id') milestoneId: number,
        @Body() body: { userId: number },
    ) {
        return this.milestoneService.getMilestoneById(body.userId, milestoneId);
    }

    @Post()
    async createMilestone(@Body() body: CreateMilestoneDto) {
        return await this.milestoneService.createMilestone(body);
    }

    @Patch('/:id')
    async updateMilestone(
        @Body() body: UpdateMilestoneDto,
        @Param('id') milestoneId: number,
    ) {
        return await this.milestoneService.updateMilestone(body, milestoneId);
    }

    @Delete('/:id')
    async deleteMilestone(
        @Param('id') milestoneId: number,
        @Body() body: { userId: number },
    ) {
        await this.milestoneService.deleteMilestone(milestoneId, body.userId);
        return;
    }
}
