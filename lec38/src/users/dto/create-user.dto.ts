import {IsEmail, IsNotEmpty, IsString, Length} from "class-validator"
import { ApiProperty } from "@nestjs/swagger"
export class CreateUserDto {


    @ApiProperty({example:"Giorgi Giorgadze",minLength:2,maxLength:20})
    @IsString()
    @Length(2,20)
    @IsNotEmpty()
    fullName!:string

    @ApiProperty({example:"giorgi@gmail.com",minLength:2,maxLength:20})
    @IsString()
    @Length(2,20)
    @IsEmail()
    @IsNotEmpty()
    email!:string

    @ApiProperty({example:"123456",minLength:2,maxLength:20})
    @IsString()
    @Length(2,20)
    @IsNotEmpty()
    password!:string

}
