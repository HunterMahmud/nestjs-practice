import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ShopController } from './shop.controller';
import { ShopService } from './shop.service';
import { ShopMiddleware } from './shop.middleware';

@Module({
  imports: [],
  controllers: [ShopController],
  providers: [ShopService],
  exports: [],
})
export class ShopModule implements NestModule {
  constructor() {
    console.log('shop module');
  }
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ShopMiddleware).forRoutes('/shop/:id');
  }
}
