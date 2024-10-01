import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { log } from 'console';
import { RegisterUserDto } from 'src/controller/models/user/registerUser.model';
import { UserEntity } from 'src/data/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>
  ) {}

  registerUser(user: RegisterUserDto) {
    let foundUser = this.findUserByEmail(user.email);
    if (foundUser) {
    }
  }

  findUserByEmail(email: string): UserEntity {
    let userFound: UserEntity;
    this.userRepository.findOneBy({ email }).then((user) => (userFound = user));
    return userFound;
  }
}
