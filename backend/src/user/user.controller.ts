import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user-dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Get('/:id')
    getUser(@Param('id') id: number) {
        return this.userService.getUserById(id);
    }

    @Post()
    createUser(@Body() body: CreateUserDto) {
        return this.userService.createUser(
            body.displayname,
            body.email,
            body.password,
        );
    }
}
