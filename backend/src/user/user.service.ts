import { Injectable, NotFoundException } from '@nestjs/common';
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

    async getUserById(userId: number) {
        const user = await this.repo.findOneBy({ userId });

        if (!user) {
            throw new NotFoundException('User not found');
        }
        return user;
    }

    async getUserByEmail(email: string) {
        const user = await this.repo.findOneBy({ email });

        if (!user) {
            throw new NotFoundException('User not found');
        }

        return user;
    }

    async createUser(username: string, email: string, password: string) {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = this.repo.create({
            username,
            email,
            password: hashedPassword,
        });

        return await this.repo.save(newUser);
    }

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
