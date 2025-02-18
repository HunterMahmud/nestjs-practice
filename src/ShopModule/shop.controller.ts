import { Controller, Delete, Get, HttpCode, Param, Patch, Post, Req, Res, ParseIntPipe, HttpStatus, Body, ValidationPipe, BadRequestException, HttpException } from "@nestjs/common";
import { ShopService } from './shop.service';
import { IResponse } from './../Interface/response.d';
import { Request, Response } from "express";
import { shopDto } from './dtos/shop.dto';
import { ShopItemPipe } from './pipes/shopItem.pipes';
import { CreateShopItemDto } from './dtos/create-shop-item.dto';
import { HttpErrorByCode } from "@nestjs/common/utils/http-error-by-code.util";
import { CustomException } from "./shop.exception";

/**
 * mainly the controllers contains the function that takes the req and res and process according to it.
 */

@Controller('shop') // this shop is prefix of all route
export class ShopController{
    constructor(private readonly shopService: ShopService){
    //     console.log("shop controller");
    }
    // private shopService: ShopService = new ShopService();

    // get shop item
    @Get(['/', '/getShop'])
    // @HttpCode(200)
    getShopItem(): IResponse{
        return this.shopService.getShopItem();
    }

    // nestjs buildin exception and customization of it
    // find the shop by id
    @Get('/getException')
    findShopItemByShopId(){
        console.log("the exception route hit")
        // throw new BadRequestException()  // this is throw the default message with status code 400
        // throw new BadRequestException({ // full customization by developer
        //     status: 400,
        //     error:"not found",
        //     objectOrError: {
        //         message: "you can message here anything"
        //     },
        //     descriptionOrOptions:"nothing",
        //     // statusCode:HttpErrorByCode[400],
        //     statusCode: HttpStatus.NOT_FOUND

        // })

        // throw new HttpException("unauthorize access", HttpStatus.UNAUTHORIZED) // a little customization with httpexception


        throw new CustomException(); // its user define custom exception inside the shop.exception.ts
    }

    // update shop item
    @Patch('/:shopId')
    updateShopItem(@Param('shopId', ParseIntPipe) shopId: number): IResponse{ // here i use the build in Pipe to validate the incoming data format
        console.log(typeof shopId)
        return this.shopService.updateShopItem(shopId);
    }

     // delete shop item
     @Delete('/:shopId')
     deleteShopItem(@Param('shopId', new ParseIntPipe({errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY})) shopId: number): IResponse{ // in this line i use custom define status code for the build in ParseIntPipe
         return this.shopService.deleteShopItem(shopId);
     }
 

    // add shop item
    @Post('/')
    addShopItem(@Body(new ShopItemPipe()) shopItem: shopDto): IResponse{ // here i implement the custom pipe
        return this.shopService.addShopItem();
    }

    // add shop item another route -- best way to custom validate
    // in this route with buildin validation but with class-validator and class-transformer
    // just have to add the class types dto and new ValidationPipe() then it will automatically handle it
    // related-video: https://www.youtube.com/watch?v=ZR5WoojlOTA&list=PLVo1k_VwkKMyxkNyMFTtcMcfNHA3xKjZ0&index=9&ab_channel=Notezz
    @Post('/add')
    addNewShopItem(@Body(new ValidationPipe()) shopItem: CreateShopItemDto): IResponse{
        return this.shopService.addShopItem();
    }
    

    // find shop by id
    @Get('/:id')
    findShopItemById(@Req() req: Request, @Res() res: Response):IResponse | void{
        return this.shopService.findShopItemById(parseInt(req?.params?.id) as number, res);
    }

    
}