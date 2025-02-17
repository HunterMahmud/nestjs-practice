// this one is using class validator for using build custom  validator pipe
import { IsString, IsInt } from 'class-validator';

export class CreateShopItemDto{
    @IsInt()
    id: number;

    @IsString()
    name: string;
}