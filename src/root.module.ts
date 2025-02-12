import { Module } from '@nestjs/common';
import { UserModule } from './UserModule/users.module';
import { ChatModule } from './ChatModule/chat.module';
import { OrderModule } from './OrderModule/orders.module';

@Module({
  imports: [UserModule, ChatModule, OrderModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class RootModule {
  constructor() {
    console.log(`Root Module`);
  }
}
