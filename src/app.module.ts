import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserService } from './service/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './data/entity/user.entity';
import { ApplicationEntity } from './data/entity/application.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        password: configService.get('DB_PASSWORD'),
        username: configService.get('DB_USER'),
        database: configService.get('DB_DATABASE'),
        logging: configService.get('DB_LOGGING'),
        synchronize: configService.get('DB_SYNC'),
        autoLoadEntities: true,
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([UserEntity, ApplicationEntity]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
