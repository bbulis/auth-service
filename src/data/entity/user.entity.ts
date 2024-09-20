import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity('user')
export class UserEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  firstname: string

  @Column()
  lastname: string

  @Column({ unique: true })
  email: string

  @Column()
  password: string

  @Column()
  isApproved: boolean

  @Column({type: 'enum', enum: ['male', 'female', 'unspecified']})
  gender: string

}
