import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private repo: Repository<User>) {}

    getAllUsers() {
        return this.repo.find();
    }

    getUserById(userId: number) {
        return this.repo.findOneBy({ userId });
    }

    getUserByEmail(email: string) {
        return this.repo.findOneBy({ email });
    }

    async createUser(username: string, email: string, password: string) {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = this.repo.create({
            username,
            email,
            password: hashedPassword,
        });

        console.log('User Succesfully created');

        return await this.repo.save(newUser);
    }
    //pg_ctl -D "C:\Program Files\PostgreSQL\17\" start
    async updateUser(userId: number, attrs: Partial<User>) {
        const user = await this.getUserById(userId);
        //BUBBLE UP ERROR TO CONTROLLER
        Object.assign(user, attrs);
        return this.repo.save(user);
    }

    async deleteUser(userId: number) {
        const user = await this.getUserById(userId);
        //BUBBLE UP ERROR TO CONTROLLER
        return this.repo.remove(user);
    }
}
