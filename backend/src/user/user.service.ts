import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private repo: Repository<User>) {}

    getAllUsers() {
        return this.repo.find();
    }

    async getUserById(id: number) {
        const user = await this.repo.findOneBy({ id });
        // Error handling
        return user;
    }

    createUser(displayname: string, email: string, password: string) {
        const newUser = this.repo.create({ displayname, email, password });

        console.log('User Succesfully created');

        return this.repo.save(newUser);
    }
    //pg_ctl -D "C:\Program Files\PostgreSQL\17\" start
    async updateUser(id: number, attrs: Partial<User>) {
        const user = await this.getUserById(id);
        //BUBBLE UP ERROR TO CONTROLLER
        Object.assign(user, attrs);
        return this.repo.save(user);
    }

    async deleteUser(id: number) {
        const user = await this.getUserById(id);
        //BUBBLE UP ERROR TO CONTROLLER
        return this.repo.remove(user);
    }
}
