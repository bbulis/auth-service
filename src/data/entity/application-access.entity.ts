import { Entity, ManyToOne } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm/decorator/columns/PrimaryGeneratedColumn';
import { UserEntity } from './user.entity';
import { ApplicationEntity } from './application.entity';

@Entity('application-access')
export class ApplicationAccessEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => UserEntity, (user) => user.applicationAccess)
  user: UserEntity;

  @ManyToOne(
    () => ApplicationEntity,
    (applicationEntity) => applicationEntity.applicationAccess
  )
  application: ApplicationEntity;
}
