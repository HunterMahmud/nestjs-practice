import { Controller } from "@nestjs/common";

@Controller("cart")
export class CartController{
    constructor(){
        console.log("cart controller");
        
    }
}