import { Module } from '@nestjs/common';
import { ShopController } from './shop.controller';
import { ShopService } from './shop.service';

@Module({
  imports: [],
  controllers: [ShopController],
  providers: [ShopService],
  exports: [],
})
export class ShopModule {
  constructor() {
    console.log('shop module');
  }
}
