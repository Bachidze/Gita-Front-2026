import { BadGatewayException, BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { isValidObjectId, Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel:Model<User>){}

async create(createUserDto:CreateUserDto) {
  
  const exsistingUser = await this.userModel.findOne({name:createUserDto.name})
 if(exsistingUser) throw  new BadGatewayException()
  const newUser = await this.userModel.create(createUserDto)
    return newUser
  }

  findAll() {
    return this.userModel.find()
  }

 async findOne(id: string) {
  if(!isValidObjectId(id)) throw new BadRequestException()
  const findNewUser = await this.userModel.findById(id)
  if(!findNewUser) throw new NotFoundException()
    return findNewUser
  }

 async update(id: string, updateUserDto: UpdateUserDto) {
  if(!isValidObjectId(id)) throw new BadRequestException()
    const updateUser  =await this.userModel.findByIdAndUpdate(id,updateUserDto,{new:true})
  if(!updateUser) throw new NotFoundException()
    return updateUser
  }

 async remove(id: string) {
  if(!isValidObjectId(id)) throw new BadRequestException()
    const deletedUser = await this.userModel.findByIdAndDelete(id)
  if(!deletedUser) throw new NotFoundException()
    return deletedUser
  }

}
