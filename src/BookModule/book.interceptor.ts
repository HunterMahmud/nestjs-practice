import {NestInterceptor, Injectable, ExecutionContext, CallHandler} from '@nestjs/common'
import { Observable } from 'rxjs';
import { Request, Response } from 'express';

@Injectable()
export class BookInterceptor implements NestInterceptor{
    intercept(context: ExecutionContext, next:CallHandler<any>): Observable<any>{
        const ctx = context.switchToHttp();
        const request = ctx.getRequest<Request>();
        const response = ctx.getResponse<Response>();
        // request.body["name"] = "send by mahmud"; // sometimes it throw an error when the body is empty
        // to prevent this we can use this below
        // which create a body then store the {name: 'send by mahmud'} if body not exists then it will create automatically
        request.body = { 
            name: 'send by mahmud' 
        }

        console.log("interceptor called")
        return next.handle();
    }
}