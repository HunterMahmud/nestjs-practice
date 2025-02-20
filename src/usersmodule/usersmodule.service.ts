import { Injectable } from '@nestjs/common';
import { CreateUsersmoduleDto } from './dto/create-usersmodule.dto';
import { UpdateUsersmoduleDto } from './dto/update-usersmodule.dto';

@Injectable()
export class UsersmoduleService {
  create(createUsersmoduleDto: CreateUsersmoduleDto) {
    return 'This action adds a new usersmodule';
  }

  findAll() {
    return `This action returns all usersmodule`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usersmodule`;
  }

  update(id: number, updateUsersmoduleDto: UpdateUsersmoduleDto) {
    return `This action updates a #${id} usersmodule`;
  }

  remove(id: number) {
    return `This action removes a #${id} usersmodule`;
  }
}
