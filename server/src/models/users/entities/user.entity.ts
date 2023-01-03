import { Employee } from 'src/models/employees/entities/employee.entity';
import { Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => Employee, (employee) => employee.user)
  employee: Employee;

  /* STRETCH GOAL: add hashed_password and salt here */
}
