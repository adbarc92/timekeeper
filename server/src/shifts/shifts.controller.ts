import { Controller, Get, Patch, Post } from '@nestjs/common';
import { ShiftsService } from './shifts.service';

@Controller('shifts')
export class ShiftsController {
  constructor(private readonly shiftService: ShiftsService) {}

  @Get()
  find(): string {
    return this.shiftService.getShift();
  }

  @Get()
  findAll(): string {
    return this.shiftService.getShifts();
  }

  @Post()
  register(): string {
    return this.shiftService.createShift();
  }

  @Patch()
  update(): string {
    return this.shiftService.updateShift();
  }
}
