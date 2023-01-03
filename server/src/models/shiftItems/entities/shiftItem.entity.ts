import {
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Column,
  JoinTable,
} from 'typeorm';
import { Employee } from 'src/models/employees/entities/employee.entity';

const enum ShiftItemType {
  LUNCH = 'LUNCH',
  BREAK = 'BREAK',
}

@Entity()
export class ShiftItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Employee, (employee) => employee.shiftItems, {
    cascade: true,
  })
  @JoinTable()
  employee: Employee;

  @Column()
  type: ShiftItemType;
}
