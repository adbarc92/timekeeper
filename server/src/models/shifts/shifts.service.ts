import { Injectable } from '@nestjs/common';

@Injectable()
export class ShiftsService {
  getShift(id: string): string {
    return `a shift (id: ${id})`;
  }

  getShifts(): string {
    return 'all shifts';
  }

  getShiftsByEmployeeId(employeeId: string): string {
    return `getting all shifts by employee id (id: ${employeeId})`;
  }

  updateShift(id: string, updateShiftDto: any): string {
    return `updating shift (id: ${id}) with new item: ${JSON.stringify(
      updateShiftDto,
    )}`;
  }

  createShift(createShiftDto: any): string {
    return `creating shift: ${JSON.stringify(createShiftDto)}`;
  }
}
