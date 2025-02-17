import { NestMiddleware, Injectable } from '@nestjs/common';
import { Response, Request, NextFunction } from 'express';

@Injectable()
export class ShopMiddleware implements NestMiddleware {
    use(_req: Request, _res:Response, next:NextFunction){
        console.log("shop middlewares")
        next()
    }
}
