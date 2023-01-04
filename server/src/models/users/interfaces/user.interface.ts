export const enum UserType {
  ADMIN = 'ADMIN',
  NON_ADMIN = 'NON_ADMIN',
}

/**
 * User variable type declaration.
 *
 * @interface
 */
export interface IUser {
  id: string;
  employeeId: string;
  type: UserType;
  createdAt: Date;
  updatedAt: Date;
}
