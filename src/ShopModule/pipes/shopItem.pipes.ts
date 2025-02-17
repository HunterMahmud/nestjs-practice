import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import { shopDto } from './../dtos/shop.dto';

@Injectable()
export class ShopItemPipe implements PipeTransform{
    transform(value:shopDto, metadata: ArgumentMetadata) {
       if(typeof value.id === "number" && typeof value.name ==='string'){
        return value;
       }
        throw new BadRequestException("validation error from custom pipe")
    }
}