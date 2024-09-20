import { Controller, Post } from "@nestjs/common";

@Controller()
export class UserController {

  @Post('login')
  login(): void {

  }

  @Post('register')
  register(): void {

  }
}
