import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { ApplicationEntity } from './application.entity';

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

  @Column()
  isApproved: boolean;

  @Column({ type: 'enum', enum: ['ADMIN', 'USER'] })
  accountType: string;

  @Column({ type: 'enum', enum: ['male', 'female'] })
  gender: string;

  @ManyToMany(() => ApplicationEntity)
  @JoinTable()
  applications: ApplicationEntity[];
}
