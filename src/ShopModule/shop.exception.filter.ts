import { ExceptionFilter, HttpException, ArgumentsHost, Catch } from "@nestjs/common";
import { Request, Response } from 'express';

@Catch(HttpException)
export class CustomExceptionFilter implements ExceptionFilter{
    catch(exception:HttpException, host: ArgumentsHost){
        const context = host.switchToHttp();
        const request = context.getRequest<Request>();
        const response = context.getResponse<Response>();
        const status = exception.getStatus();

        response.status(status)
        .json({
            statusCode: status,
            date: new Date().toLocaleString(),
            path: request.url,
            host: request.get("host"),
            method: request.method,
            other: request.cookies || "no cookies found"
        })
    }
}