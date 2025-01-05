import {
    UseInterceptors,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { plainToInstance, ClassConstructor } from 'class-transformer';

export function Serializer<T>(dto: ClassConstructor<T>) {
    return UseInterceptors(new SerializerInterceptor<T>(dto));
}

class SerializerInterceptor<T> implements NestInterceptor {
    constructor(private dto: ClassConstructor<T>) {}

    intercept(
        context: ExecutionContext,
        next: CallHandler<any>,
    ): Observable<any> | Promise<Observable<any>> {
        return next.handle().pipe(
            map((data: any) => {
                return plainToInstance(this.dto, data, {
                    excludeExtraneousValues: true,
                });
            }),
        );
    }
}
