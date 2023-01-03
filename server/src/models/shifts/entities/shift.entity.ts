import { Employee } from 'src/models/employees/entities/employee.entity';
import { ShiftItem } from 'src/models/shiftItems/entities/shiftItem.entity';
import {
  Entity,
  JoinTable,
  PrimaryGeneratedColumn,
  ManyToMany,
  OneToMany,
  Column,
} from 'typeorm';

@Entity()
export class Shift {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToMany(() => Employee)
  @JoinTable()
  employees: Employee[];

  @OneToMany(() => ShiftItem, (shiftItem) => shiftItem.shift, {
    cascade: true,
  })
  shiftItems: ShiftItem[];

  @Column({ type: 'date' })
  date: string;

  @Column()
  startHour: number;

  @Column()
  endHour: number;
}
