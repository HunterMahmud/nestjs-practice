import { Module } from "@nestjs/common";

@Module({
    imports: [],
    providers: [],
    controllers: [],
    exports: []
})
export class Feature2{
    constructor(){
        console.log('Feature 2')
    }
}