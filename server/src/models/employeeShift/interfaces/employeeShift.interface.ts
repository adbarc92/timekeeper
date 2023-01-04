/**
 * EmployeeShift variable type declaration.
 *
 * @interface
 */
export interface IEmployeeShift {
  employeeId: string;
  shiftId: string;
  clockInTime: Date;
  clockOutTime: Date;
  createdAt: Date;
  updatedAt: Date;
}
