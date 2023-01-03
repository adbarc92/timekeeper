import { Employee } from 'src/models/employees/entities/employee.entity';
import {
  Entity,
  JoinTable,
  PrimaryGeneratedColumn,
  ManyToMany,
  Column,
} from 'typeorm';

@Entity()
export class Shift {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToMany(() => Employee)
  @JoinTable()
  employees: Employee[];

  @Column({ type: 'date' })
  date: string;

  @Column()
  startHour: number;

  @Column()
  endHour: number;

  @Column()
  holiday: boolean;

  @Column()
  weekend: boolean;
}
