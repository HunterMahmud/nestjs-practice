import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateUsersmoduleDto } from './dto/create-usersmodule.dto';
import { UpdateUsersmoduleDto } from './dto/update-usersmodule.dto';
import { Usersmodule } from './entities/usersmodule.entity';

@Injectable()
export class UsersmoduleService {
  constructor(@InjectRepository(Usersmodule) private readonly usersRepository: Repository<Usersmodule>){

  }

  create(createUsersmoduleDto: CreateUsersmoduleDto): Promise<Usersmodule> {
    const user: Usersmodule = new Usersmodule();
    user.age = createUsersmoduleDto.age;
    user.email = createUsersmoduleDto.email;
    user.firstName = createUsersmoduleDto.firstName;
    user.lastName = createUsersmoduleDto.lastName;

    return this.usersRepository.save(user);
  }

  findAll(): Promise<Usersmodule[] | []> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<Usersmodule | null | {}> {
    return this.usersRepository.findOneBy({id});
  }

  update(id: number, updateUsersmoduleDto: UpdateUsersmoduleDto): Promise<Usersmodule | []> {
    const user: Usersmodule = new Usersmodule();
    user.age = updateUsersmoduleDto.age;
    user.email = updateUsersmoduleDto.email;
    user.firstName = updateUsersmoduleDto.firstName;
    user.lastName = updateUsersmoduleDto.lastName;
    user.id = id;

    return this.usersRepository.save(user);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.usersRepository.delete(id);
  }
}
