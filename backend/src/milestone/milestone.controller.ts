import {
    Body,
    Controller,
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
    createMilestone(@Body() body: CreateMilestoneDto) {
        return this.milestoneService.createMilestone(body);
    }

    @Patch('/:id')
    updateMilestone(
        @Body() body: UpdateMilestoneDto,
        @Param('id') milestoneId: number,
    ) {
        return this.milestoneService.updateMilestone(body, milestoneId);
    }
}
