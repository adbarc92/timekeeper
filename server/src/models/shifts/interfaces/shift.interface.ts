/**
 * Shift variable type declaration.
 *
 * @interface
 */
export interface IShift {
  id: string;
  shiftItemIds: string[];
  date: Date;
  startHour: number;
  endHour: number;
  createdAt: Date;
  updatedAt: Date;
}
