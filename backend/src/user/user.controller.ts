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
import { Serializer } from 'src/interceptors/serialize.interceptor';
import { UserSerializerDto } from './dtos/serializer-dto';

@Controller('user')
@Serializer(UserSerializerDto)
export class UserController {
    constructor(private userService: UserService) {}

    @Get('/:id')
    getUser(@Param('id') id: string) {
        return this.userService.getUserById(parseInt(id));
    }

    // Tempoary for testing
    @Get()
    async getAllUsers() {
        const users = await this.userService.getAllUsers();
        return users;
    }

    @Post()
    createUser(@Body() body: CreateUserDto) {
        this.userService.createUser(
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
        this.userService.deleteUser(parseInt(id));
    }
}
