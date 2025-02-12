import { Module } from "@nestjs/common";

@Module({
    imports: [],
    providers: [],
    controllers: [],
    exports: []
})
export class Feature3{
    constructor(){
        console.log('Feature 3')
    }
}