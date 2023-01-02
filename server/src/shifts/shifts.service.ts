import { Injectable } from '@nestjs/common';

@Injectable()
export class ShiftsService {
  getShift(): string {
    return 'a shift!';
  }

  getShifts(): string {
    return 'all shifts';
  }

  getShiftsByEmployeeId(): string {
    return 'getting all shifts by employee id';
  }

  updateShift(): string {
    return 'updating shift';
  }

  createShift(): string {
    return 'creating shift';
  }
}
