import {
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Column,
  JoinTable,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Employee } from 'src/models/employees/entities/employee.entity';
import { Shift } from 'src/models/shifts/entities/shift.entity';

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
  type: 'LUNCH' | 'BREAK';

  @Column({ type: 'timestamp', nullable: true })
  startTime: Date;

  @Column({ type: 'timestamp', nullable: true })
  endTime: Date | null;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt!: Date;
}
