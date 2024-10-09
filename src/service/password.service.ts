import { Injectable, Logger } from '@nestjs/common';
import { genSalt, hash } from 'bcryptjs';

@Injectable()
export class PasswordService {
  private readonly logger = new Logger(PasswordService.name);
  constructor() {}
  async hashPassword(password: string) {
    this.logger.log('Gen Salt');
    const generatedSalt = await genSalt(12);
    this.logger.log('hash password');
    return hash(password, generatedSalt);
  }
}
