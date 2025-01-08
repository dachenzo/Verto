import {
    ExecutionContext,
    CallHandler,
    Injectable,
    NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class InsertUserInterceptor implements NestInterceptor {
    intercept(
        context: ExecutionContext,
        next: CallHandler<any>,
    ): Observable<any> | Promise<Observable<any>> {
        const request = context.switchToHttp().getRequest();

        const user = request.user;
        if (user) {
            request.body.userId = user.sub;
        }

        return next.handle().pipe(
            map((data) => {
                return data;
            }),
        );
    }
}
