import { Module } from '@nestjs/common';
import { Feature1 } from './../Feature1/feature1.module';

@Module({
  imports: [Feature1],
  controllers: [],
  providers: [],
  exports: [],
})
export class ChatModule {
  constructor() {
    console.log('chat modules');
  }
}
