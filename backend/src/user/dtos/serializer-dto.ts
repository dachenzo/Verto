import { Expose } from 'class-transformer';

export class UserSerializerDto {
    @Expose()
    id: number;

    @Expose()
    email: string;

    @Expose()
    displayname: string;
}
