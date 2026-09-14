import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { SingUpDto } from './dto/sing-up.dto';
import * as bcrypt from "bcrypt"
import { SingInDto } from './dto/sign-in.dto';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
    constructor(private usersService:UsersService,private jwtService:JwtService){}

    async SingUp(singUpDto:SingUpDto){
        const exsistingUser = await this.usersService.findOneByEmail(singUpDto.email)
        if(exsistingUser) throw new BadRequestException("user already exsists")
            const hashedPass = await bcrypt.hash(singUpDto.password,10)
        await this.usersService.create({...singUpDto,password:hashedPass})
        return "მომხმარებელი შექიმან წარამტებით"
    }

    async SignIn(singInDto:SingInDto){
        const exsistingUser = await this.usersService.findOneByEmail(singInDto.email)
        if(!exsistingUser) throw new BadRequestException("create user /auth/sing-up")
            const isEquealPAss = await bcrypt.compare(singInDto.password,exsistingUser.password)
        if(!isEquealPAss) throw new BadRequestException("invalid Credentials")
            const payLoad = {
            userId:exsistingUser._id
                }
                const accessToken = await this.jwtService.sign(payLoad,{expiresIn:"1h"})
                return accessToken
    }

    async currentUser(userId:string){
        const user = await this.usersService.findOne(userId)
        return user
    }

}
