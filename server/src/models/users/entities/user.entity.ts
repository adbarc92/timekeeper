import { Employee } from 'src/models/employees/entities/employee.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => Employee, (employee) => employee.user)
  employee: Employee;

  @Column()
  type: 'ADMIN' | 'NON_ADMIN';

  /* STRETCH GOAL: add hashed_password and salt here */
}
