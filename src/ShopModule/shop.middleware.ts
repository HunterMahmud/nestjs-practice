import { NestMiddleware, Injectable } from '@nestjs/common';
import { Response, Request, NextFunction } from 'express';

@Injectable()
export class ShopMiddleware implements NestMiddleware {
    use(req: Request, _res:Response, next:NextFunction){
        console.log("shop middlewares")
        const host = req.get("host");
        const url = req.originalUrl;
        const method = req.method;
        const date = new Date();
        const ip = req.ip;

        console.log(`IP:${ip} ${req.protocol}://${host}${url} METHOD: ${method} ${date.toTimeString()}`) // loggin with the req with time date host method and ip address
        next()
    }
}
