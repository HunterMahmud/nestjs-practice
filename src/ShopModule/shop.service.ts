import {  Injectable, Param } from "@nestjs/common"
import { Response } from "express";
import { IResponse } from './../Interface/response.d';

// @Injectable()
export class ShopService{
    // get shop item
    
    getShopItem(): IResponse{
        return {success: true, message: "this will get shop item", data: []};
    }

    // add shop item
    addShopItem(): IResponse{
        return {success: true, message: "this will add shop item", data: []}
     
    }

    // delete shop item
    deleteShopItem(id: number): IResponse{
        return {success: true, message: `this will delete shop item: ${id}`, data: []}
    }

    // update shop item
    updateShopItem(id: number): IResponse{
        return {success: true, message: `this will update shop item: ${id}`, data: []}
    }

    // find shop by id
    findShopItemById(id:number, res: Response):IResponse | void {
        res.send({success: true, message: `this is a shop by id: ${id}`, data: []})
    }
}