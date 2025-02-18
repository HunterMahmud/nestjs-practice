import {Injectable, CanActivate, ExecutionContext} from '@nestjs/common'
import { Observable } from 'rxjs';
import { Request, Response } from 'express';

@Injectable()
export class BookGuard implements CanActivate{
    public key: string = 'jfdksahjfdiosafd457392w';
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        // throw new Error('Method not implemented.');
        console.log("the guard called");
        const ctx = context.switchToHttp();
        const request = ctx.getRequest<Request>();

        if(request.header('key') !== undefined && request.header('key')=== this.key){
            return true;
        }
        return false;
    }

}