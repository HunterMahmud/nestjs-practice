import { Controller, Delete, Get, HttpCode, Param, Patch, Post, Req, Res } from "@nestjs/common";
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
    deleteShopItem(): IResponse{
        return this.shopService.deleteShopItem();
    }

    // update shop item
    @Patch('/:shopId')
    updateShopItem(): IResponse{
        return this.shopService.updateShopItem();
    }

    // find shop by id
    @Get('/:id')
    findShopItemById(@Req() req: Request, @Res() res: Response):IResponse | void{
        return this.shopService.findShopItemById(parseInt(req?.params?.id) as number, res);
    }
}