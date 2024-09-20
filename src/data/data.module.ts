import { Module } from "@nestjs/common";
import { UserEntity } from "./entity/user.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";

@Module({
  imports: [
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
        entities: [UserEntity]
      }),
      inject: [ConfigService]
    })
  ]
})
export class DataModule { }
