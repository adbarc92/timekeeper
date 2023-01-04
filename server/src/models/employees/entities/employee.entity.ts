import { ShiftItem } from 'src/models/shiftItems/entities/shiftItem.entity';
import { User } from 'src/models/users/entities/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  address: string;

  @Column()
  phoneNumber: number;

  @OneToMany(() => ShiftItem, (shiftItem: ShiftItem) => shiftItem.employee)
  shiftItems: ShiftItem[];

  @OneToOne(() => User, (user) => user.employee)
  user: User | null;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
