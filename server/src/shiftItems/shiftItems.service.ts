import { Injectable } from '@nestjs/common';

@Injectable()
export class ShiftItemsService {
  getShiftItem(id: string): string {
    return `a shift item (id: ${id})`;
  }

  getShiftItems(): string {
    return 'all shiftItems';
  }

  // get breaks

  // get lunches

  getShiftsByEmployeeId(employeeId: string): string {
    return `getting all shiftItems by employee id (id: ${employeeId})`;
  }

  updateShiftItem(id: string, updateShiftItemDto: any): string {
    return `updating shiftItem (id: ${id}) with new item: ${JSON.stringify(
      updateShiftItemDto,
    )}`;
  }

  createShiftItem(createShiftItemDto: any): string {
    return `creating shiftItem: ${JSON.stringify(createShiftItemDto)}`;
  }
}
