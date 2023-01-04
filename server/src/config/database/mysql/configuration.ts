import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from 'src/models/employees/entities/employee.entity';
import { EmployeeShift } from 'src/models/employeeShift/entities/employeeShift.entity';
import { ShiftItem } from 'src/models/shiftItems/entities/shiftItem.entity';
import { Shift } from 'src/models/shifts/entities/shift.entity';
import { User } from 'src/models/users/entities/user.entity';

export default TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'paychex',
  entities: [User, Employee, ShiftItem, Shift, EmployeeShift],
  synchronize: true,
  logging: true,
});
