import { Body, Controller, HttpCode, Logger, Post } from '@nestjs/common';
import { RegisterUserDto } from './models/user/registerUser.model';
import { UserService } from 'src/service/user.service';
import { LoginUserDto } from './models/user/loginUser.model';

@Controller()
export class UserController {
  private readonly logger = new Logger(UserController.name);
  constructor(private userService: UserService) {}

  @Post('login')
  @HttpCode(200)
  login(@Body() user: LoginUserDto) {
    return this.userService.loginUser(user);
  }

  @Post('register')
  @HttpCode(201)
  register(@Body() user: RegisterUserDto) {
    this.logger.log('Request to create new user');
    return this.userService.registerUser(user);
  }
}
