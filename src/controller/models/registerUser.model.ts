import { IsEnum, IsNotEmpty, IsString, MinLength } from "class-validator";

export class RegisterUserDto {
  @IsString()
  @MinLength(2)
  @IsNotEmpty()
  firstname: string

  @IsString()
  @MinLength(2)
  @IsNotEmpty()
  lastname: string

  @IsString()
  @IsEnum(['male', 'female', 'unspecified'])
  @IsNotEmpty()
  gender: string

  @IsString()
  @IsNotEmpty()
  password: string
}
