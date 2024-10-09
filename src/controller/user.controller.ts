import {
  Body,
  Controller,
  Logger,
  NotImplementedException,
  Post,
} from '@nestjs/common';
import { RegisterUserDto } from './models/user/registerUser.model';
import { UserService } from 'src/service/user.service';

@Controller()
export class UserController {
  private readonly logger = new Logger(UserController.name);
  constructor(private userService: UserService) {}

  @Post('login')
  login() {
    throw new NotImplementedException();
  }

  @Post('register')
  register(@Body() user: RegisterUserDto) {
    this.logger.log('Request to create new user');
    return this.userService.registerUser(user);
  }
}
