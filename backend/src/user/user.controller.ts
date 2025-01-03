import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user-dto';
import { UserService } from './user.service';
import { UpdateUserDto } from './dtos/update-user-dto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Get('/:id')
    getUser(@Param('id') id: string) {
        return this.userService.getUserById(parseInt(id));
    }

    @Post()
    createUser(@Body() body: CreateUserDto) {
        return this.userService.createUser(
            body.displayname,
            body.email,
            body.password,
        );
    }

    @Patch('/:id')
    updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
        return this.userService.updateUser(parseInt(id), body);
    }

    @Delete('/:id')
    deleteUser(@Param('id') id: string) {
        return this.userService.deleteUser(parseInt(id));
    }
}
