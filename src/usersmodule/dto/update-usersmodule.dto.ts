import { PartialType } from '@nestjs/mapped-types';
import { CreateUsersmoduleDto } from './create-usersmodule.dto';

export class UpdateUsersmoduleDto extends PartialType(CreateUsersmoduleDto) {}
