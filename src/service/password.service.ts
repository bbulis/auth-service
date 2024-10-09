import { Injectable, Logger } from '@nestjs/common';
import { compare, genSalt, hash } from 'bcryptjs';

@Injectable()
export class PasswordService {
  private readonly logger = new Logger(PasswordService.name);
  constructor() {}
  async hashPassword(password: string) {
    this.logger.log('generating salt for password hashing');
    const generatedSalt = await genSalt(12);
    this.logger.log('hashing password for new user');
    return hash(password, generatedSalt);
  }

  checkPassword(clearPassword: string, hashedPassword: string) {
    return compare(clearPassword, hashedPassword);
  }
}
