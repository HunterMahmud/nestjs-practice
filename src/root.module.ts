import { Module } from '@nestjs/common';
import { UserModule } from './UserModule/users.module';
import { ChatModule } from './ChatModule/chat.module';
import { OrderModule } from './OrderModule/orders.module';
import { CartModule } from './CartModule/cart.module';
import { HistoryModule } from './HistoryModule/history.module';
import { ShopModule } from './ShopModule/shop.module';
import { BookModule } from './BookModule/book.module';

@Module({
  imports: [
  // UserModule,  ChatModule,  OrderModule,
    // CartModule,
    // HistoryModule,
    ShopModule,
    BookModule
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class RootModule {
  constructor() {
    console.log(`Root Module`);
  }
}
