import { Controller, Delete, Get, Param, Post, Put, Redirect, Req } from "@nestjs/common";
import { Request } from "express";
import { UserService } from "./user.service";


@Controller('user')
export class UserController{
    constructor(public userService: UserService){
        console.log("this is the user controller")
    }
    // add a user
    @Post('/')
    addUser():object{
        return this.userService.addUser();
    }
    // get all user
    @Get('/')
    getUser():object{
        return this.userService.getUser()
    }
    // delete a user
    @Delete('/')
    @Redirect('http://localhost:3000/user', 301) // checking the redirecting 
    deleteUser():object{
        return this.userService.deleteUser()
    }
    

    @Get('/:id')
    getUserById(@Param() params: any): object{
        return this.userService.getUserById(parseInt(params.id) as number);
    }
}