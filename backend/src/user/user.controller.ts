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

    @Get('/')
    getUser(@Body() body: { userId: number }) {
        return this.userService.getUserById(body.userId);
    }

    @Patch('/:id')
    updateUser(@Param('id') userId: string, @Body() body: UpdateUserDto) {
        return this.userService.updateUser(parseInt(userId), body);
    }

    @Delete('/:id')
    deleteUser(@Param('id') userId: string) {
        this.userService.deleteUser(parseInt(userId));
    }
}
