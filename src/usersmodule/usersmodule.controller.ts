import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersmoduleService } from './usersmodule.service';
import { CreateUsersmoduleDto } from './dto/create-usersmodule.dto';
import { UpdateUsersmoduleDto } from './dto/update-usersmodule.dto';

@Controller('usersmodule')
export class UsersmoduleController {
  constructor(private readonly usersmoduleService: UsersmoduleService) {}

  @Post()
  create(@Body() createUsersmoduleDto: CreateUsersmoduleDto) {
    return this.usersmoduleService.create(createUsersmoduleDto);
  }

  @Get()
  findAll() {
    return this.usersmoduleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersmoduleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsersmoduleDto: UpdateUsersmoduleDto) {
    return this.usersmoduleService.update(+id, updateUsersmoduleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersmoduleService.remove(+id);
  }
}
