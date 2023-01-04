import { ShiftItem } from 'src/models/shiftItems/entities/shiftItem.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Shift {
  @PrimaryGeneratedColumn('uuid')
  id: string;

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

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
