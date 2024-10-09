import { HttpException, HttpStatus } from '@nestjs/common';

export class UserNotFoundException extends HttpException {
  constructor(email: string) {
    super(
      `user with email ${email} does not exist in database`,
      HttpStatus.NOT_FOUND
    );
  }
}
