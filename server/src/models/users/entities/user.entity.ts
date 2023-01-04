import { Employee } from 'src/models/employees/entities/employee.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserType } from '../interfaces/user.interface';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => Employee, (employee) => employee.user)
  employee: Employee;

  @Column()
  type: UserType;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  /* STRETCH GOAL: add hashed_password and salt here */
}
