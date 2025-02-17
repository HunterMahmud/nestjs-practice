import { Module } from "@nestjs/common";


@Module({
    imports: [],
    controllers: [],
    providers: [],
    exports:[]
})
export class HistoryModule{
    constructor(){
        console.log("this is history module")
    }
}