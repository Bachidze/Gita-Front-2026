import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";

@Schema({timestamps:true})
export class User {
    
    @ApiProperty({example:"Giorgi Giorgadze"})
    @Prop({type:String})
    fullName!:string

    @ApiProperty({example:"giorgi@gmail.com"})
    @Prop({type:String})
    email!:string

    @ApiProperty({description:"bcrypt-ით ჰეშირებული პაროლი"})
    @Prop({type:String})
    password!:string
}

export const userSchema = SchemaFactory.createForClass(User)
