import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { BookGuard } from './book.guard';

@Controller('book')
export class BookController {
  constructor() {
    console.log('book controller');
  }

  @Get('/getBook')
  @UseGuards(new BookGuard())
  getBook(): object {
    return { data: 'all books returned' };
  }

  @Post('/addBook')
  addBook(): object {
    return {data: 'book added'}
  }
}
