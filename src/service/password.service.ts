import { Injectable, Logger } from '@nestjs/common';
import { genSalt, hash } from 'bcryptjs';

@Injectable()
export class PasswordService {
  private readonly logger = new Logger(PasswordService.name);
  constructor() {}
  async hashPassword(password: string) {
    this.logger.log('Gen Salt');
    const generatedSalt = await genSalt(15);
    this.logger.log('hash password');
    return await hash(password, generatedSalt);
  }
}
