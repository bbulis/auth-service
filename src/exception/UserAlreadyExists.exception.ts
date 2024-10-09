import { HttpException, HttpStatus } from '@nestjs/common';

export class UserAlreadyExistsException extends HttpException {
  constructor() {
    super('user already exists', HttpStatus.FORBIDDEN, {
      description: 'the user you try to create already exists in database',
    });
  }
}
