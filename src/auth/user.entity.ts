import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Task } from '../tasks/user.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Task, (task) => task.user)
  tasks: Task[];

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  role: string;
  salt: string;
}
