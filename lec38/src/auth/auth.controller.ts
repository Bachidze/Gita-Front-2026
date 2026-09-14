import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SingUpDto } from './dto/sing-up.dto';
import { SingInDto } from './dto/sign-in.dto';
import { AuthGuard } from './guards/auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("/sign-up")
  singUp(@Body() singUpDto:SingUpDto){
    return this.authService.SingUp(singUpDto)
  }

  @Post("/sign-in")
  singIn(@Body() signInDto:SingInDto){
    return this.authService.SignIn(signInDto)
  }

  @UseGuards(AuthGuard)
  @Get("/current-user")
  currentUser(@Req() request){
    const userId = request.userId
    console.log(userId,)
    return this.authService.currentUser(userId)
  }
}
