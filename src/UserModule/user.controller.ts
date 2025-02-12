import { Controller, Delete, Get, Param, Post, Put, Redirect, Req } from "@nestjs/common";
import { Request } from "express";


@Controller('user')
export class UserController{
    constructor(){
        console.log("this is the user controller")
    }
    // add a user
    @Post('/')
    addUser():object{
        return {status:200, message:'user added'}
    }
    // get all user
    @Get('/')
    getUser():object{
        return {status:200, message:'user getting'}
    }
    // delete a user
    @Delete('/')
    @Redirect('http://localhost:3000/user', 301) // checking the redirecting 
    deleteUser():object{
        return {message: "user deleted"}
    }
    
    // update user
    @Put('/user')
    updateUser():string{
        return 'user updated'
    }

    @Get('/:id')
    getUserById(@Param() params): object{
        console.log(params?.id)
        return {status: 200, message:`this is the id ${params?.id}`}
    }
}