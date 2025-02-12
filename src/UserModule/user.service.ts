import { Injectable, Param } from "@nestjs/common";

@Injectable()
export class UserService{
    addUser():object{
        return {status:200, message:'user added'}
    }

    getUser():object{
        return {status:200, message:'user getting'}
    }

    deleteUser():object{
        return {message: "user deleted"}
    }

    getUserById(id: number): object{
        console.log(typeof id)
        return {status: 200, message:`this is the id ${id}`}
    }

}