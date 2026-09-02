import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({timestamps:true})

export class User {
    @Prop()
    name!:string


    @Prop()
    age!:number
}

export const userScehma = SchemaFactory.createForClass(User)


