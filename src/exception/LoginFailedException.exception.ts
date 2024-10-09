import { HttpException, HttpStatus } from '@nestjs/common';

export class LoginFailedExceptionException extends HttpException {
  constructor(email: string) {
    super(`login failed for user with email ${email}`, HttpStatus.UNAUTHORIZED);
  }
}
