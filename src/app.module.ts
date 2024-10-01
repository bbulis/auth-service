import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { ConfigModule } from '@nestjs/config';
import { DataModule } from './data/data.module';
import { UserService } from './service/user.service';

@Module({
  imports: [ConfigModule.forRoot(), DataModule],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
