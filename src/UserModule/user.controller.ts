import { Controller, Delete, Get, Param, Post, Put, Redirect, Req } from "@nestjs/common";
import { Request } from "express";
import { UserService } from "./user.service";


@Controller('user')
export class UserController{
    // readonly userService: UserService; // this is automatically happening by declaring with "private readonly" in the constructor function
    constructor(private readonly userService: UserService){
        // console.log("user controller")
        // this.userService = new UserService() // it is automatically initialize by the nestjs
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
    getUserById(@Param("id") id: string): object{
        return this.userService.getUserById(parseInt(id) as number);
    }
}