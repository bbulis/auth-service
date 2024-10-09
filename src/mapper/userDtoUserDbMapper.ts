import { UserEntity } from '../data/entity/user.entity';
import { RegisterUserDto } from '../controller/models/user/registerUser.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserDtoUserDbMapper {
  toDb(input: RegisterUserDto): UserEntity {
    const user = new UserEntity();
    user.firstname = input.firstname;
    user.lastname = input.lastname;
    user.email = input.email;
    user.gender = input.gender;
    return user;
  }
}
