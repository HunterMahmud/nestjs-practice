import { Module } from "@nestjs/common";

@Module({
    imports: [],
    providers: [],
    controllers: [],
    exports: []
})
export class Feature1{
    constructor(){
        console.log('Feature 1')
    }
}