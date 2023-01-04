export const enum ShiftItemType {
  LUNCH = 'LUNCH',
  BREAK = 'BREAK',
}

/**
 * Employee variable type declaration.
 *
 * @interface
 */
export interface IShiftItem {
  id: string;
  employeeIds: string[];
  shiftId: string;
  address: string;
  phoneNumber: number;
  type: ShiftItemType;
  startTime: Date;
  endTime: Date | null;
  createdAt: Date;
  updatedAt: Date;
}
