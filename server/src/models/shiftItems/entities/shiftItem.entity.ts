import {
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Column,
  JoinTable,
} from 'typeorm';
import { Employee } from 'src/models/employees/entities/employee.entity';
import { Shift } from 'src/models/shifts/entities/shift.entity';

const enum ShiftItemType {
  LUNCH = 'LUNCH',
  BREAK = 'BREAK',
}

/**
 * ShiftItem entails both breaks and lunches.
 * Every shiftItem corresponds to one employee.
 */
@Entity()
export class ShiftItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Employee, (employee: Employee) => employee.shiftItems, {
    cascade: true,
  })
  @JoinTable()
  employee: Employee;

  @ManyToOne(() => Shift, (shift: Shift) => shift.shiftItems)
  shift: Shift;

  @Column()
  type: ShiftItemType;

  @Column({ type: 'timestamp', nullable: true })
  startTime: Date;

  @Column({ type: 'timestamp', nullable: true })
  endTime: Date | null;
}
