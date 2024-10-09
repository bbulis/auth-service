import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ApplicationAccessEntity } from './application-access.entity';

@Entity('application')
export class ApplicationEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(
    () => ApplicationAccessEntity,
    (applicationAccessEntity) => applicationAccessEntity.user
  )
  applicationAccess: ApplicationAccessEntity[];
}
