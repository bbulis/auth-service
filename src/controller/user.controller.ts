import { Body, Controller, Post, Res } from '@nestjs/common';
import { RegisterUserDto } from './models/user/registerUser.model';
import { UserService } from 'src/service/user.service';

@Controller()
export class UserController {
  constructor(private userService: UserService) {}

  @Post('login')
  login() {}

  @Post('register')
  register(@Body() user: RegisterUserDto) {
    this.userService.registerUser(user);
  }
}
