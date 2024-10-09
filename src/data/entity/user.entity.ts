import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ApplicationAccessEntity } from './application-access.entity';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: false })
  isApproved: boolean;

  @Column({ type: 'enum', enum: ['ADMIN', 'USER'] })
  accountType: string;

  @Column({ type: 'enum', enum: ['male', 'female'] })
  gender: string;

  @OneToMany(
    () => ApplicationAccessEntity,
    (applicationAccessEntity) => applicationAccessEntity.user
  )
  applicationAccess: ApplicationAccessEntity[];
}
