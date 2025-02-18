import { Controller, Get, Post, UseGuards, UseInterceptors, Req, Res } from '@nestjs/common';
import { BookGuard } from './book.guard';
import { BookInterceptor } from './book.interceptor';
import { Request, Response } from 'express';

@Controller('book')
export class BookController {
  constructor() {
    console.log('book controller');
  }

  @Get('/getBook')
  @UseInterceptors(BookInterceptor)
  @UseGuards(BookGuard)
  getBook(): object {
    return { data: 'all books returned' };
  }

  @Post('/addBook')
  @UseInterceptors(BookInterceptor)
  @UseGuards(BookGuard)
  addBook(@Req() req: Request): any {//, @Res() res: Response --> we can't use express res when using interceptor
    console.log("the body data is: ",req?.body)
    // res.send(req.body)
    return req.body;
  }
}
