import { Expose } from 'class-transformer';

export class UserSerializerDto {
    @Expose()
    userId: number;

    @Expose()
    email: string;

    @Expose()
    username: string;
}
