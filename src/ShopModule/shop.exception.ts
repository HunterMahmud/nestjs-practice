import { HttpException } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';

export class CustomException extends HttpException{
    constructor(){
        super("Custom Error Message", HttpStatus.BAD_GATEWAY);
    }
}