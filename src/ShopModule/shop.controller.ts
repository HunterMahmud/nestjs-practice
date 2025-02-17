import { Controller, Delete, Get, HttpCode, Param, Patch, Post, Req, Res, ParseIntPipe, HttpStatus } from "@nestjs/common";
import { ShopService } from './shop.service';
import { IResponse } from './../Interface/response.d';
import { Request, Response } from "express";

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

    // add shop item
    @Post('/')
    addShopItem(): IResponse{
        return this.shopService.addShopItem();
    }

    // delete shop item
    @Delete('/:shopId')
    deleteShopItem(@Param('shopId', new ParseIntPipe({errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY})) shopId: number): IResponse{ // in this line i use custom define status code for the ParseIntPipe
        return this.shopService.deleteShopItem(shopId);
    }

    // update shop item
    @Patch('/:shopId')
    updateShopItem(@Param('shopId', ParseIntPipe) shopId: number): IResponse{ // here i use the Pipe to validate the incoming data format
        console.log(typeof shopId)
        return this.shopService.updateShopItem(shopId);
    }

    // find shop by id
    @Get('/:id')
    findShopItemById(@Req() req: Request, @Res() res: Response):IResponse | void{
        return this.shopService.findShopItemById(parseInt(req?.params?.id) as number, res);
    }
}