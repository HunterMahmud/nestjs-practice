import { Module } from '@nestjs/common';
import { BookController } from './book.controller';

@Module({
  imports: [],
  providers: [],
  controllers: [BookController],
  exports: [],
})
export class BookModule {
  constructor() {
    console.log('Book Module');
  }
}
