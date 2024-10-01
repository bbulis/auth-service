import { Body, Controller, Post, Res } from '@nestjs/common';
import { RegisterUserDto } from './models/user/registerUser.model';
import { Response } from 'express';

@Controller()
export class UserController {
  @Post('login')
  login() {}

  @Post('register')
  register(@Body() user: RegisterUserDto) {
    console.log(user);
  }
}
