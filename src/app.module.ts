import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './controller/user.controller';
import { ConfigModule } from '@nestjs/config';
import { DataModule } from './data/data.module';

@Module({
  imports: [ConfigModule.forRoot(), DataModule],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule { }
