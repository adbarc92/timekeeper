/**
 * Employee variable type declaration.
 *
 * @interface
 */
export interface IEmployee {
  id: string;
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber: number;
  shiftItemIds: string[];
  userId: string | null;
  createdAt: Date;
  updatedAt: Date;
}
