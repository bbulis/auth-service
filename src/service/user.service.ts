import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegisterUserDto } from 'src/controller/models/user/registerUser.model';
import { UserEntity } from 'src/data/entity/user.entity';
import { Repository } from 'typeorm';
import { UserAlreadyExistsException } from '../exception/UserAlreadyExists.exception';
import { PasswordService } from './password.service';
import { UserDtoUserDbMapper } from '../mapper/userDtoUserDbMapper';
import { LoginUserDto } from '../controller/models/user/loginUser.model';
import { LoginFailedExceptionException } from '../exception/LoginFailedException.exception';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    private passwordService: PasswordService,
    private userMapper: UserDtoUserDbMapper
  ) {}

  async loginUser(user: LoginUserDto) {
    this.logger.log(
      `checking if user exists in database - email ${user.email}`
    );
    const foundUser = await this.findUserByEmail(user.email);
    if (!foundUser) {
      throw new LoginFailedExceptionException(user.email);
    }
    if (
      !(await this.passwordService.checkPassword(
        user.password,
        foundUser.password
      ))
    ) {
      throw new LoginFailedExceptionException(user.email);
    }
    return 'success';
  }

  async registerUser(user: RegisterUserDto) {
    this.logger.log(
      `checking if user already exists in database - mail ${user.email}`
    );
    const foundUser = await this.findUserByEmail(user.email);
    if (foundUser) {
      this.logger.warn(`user ${user.email} already exists in database`);
      throw new UserAlreadyExistsException();
    }
    this.logger.log(`user ${user.email} does not exist in database`);
    const hashedPassword = await this.passwordService.hashPassword(
      user.password
    );
    this.logger.log('map to database user');
    const userEntity = this.userMapper.toDb(user);
    userEntity.password = hashedPassword;
    userEntity.isApproved = false;
    userEntity.accountType = 'USER';
    this.logger.log('saving to databse');
    return this.userRepository.save(userEntity);
  }

  findUserByEmail(email: string) {
    return this.userRepository.findOneBy({ email });
  }
}
