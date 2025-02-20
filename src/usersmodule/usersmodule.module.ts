import { Module } from '@nestjs/common';
import { UsersmoduleService } from './usersmodule.service';
import { UsersmoduleController } from './usersmodule.controller';
import { Usersmodule } from './entities/usersmodule.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Usersmodule])],
  controllers: [UsersmoduleController],
  providers: [UsersmoduleService],
})
export class UsersmoduleModule {}
