import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ShiftsService } from './shifts.service';

@Controller('shifts')
export class ShiftsController {
  constructor(private readonly shiftService: ShiftsService) {}

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return this.shiftService.getShift(id);
  }

  @Get()
  findAll(): string {
    return this.shiftService.getShifts();
  }

  @Post()
  create(@Body() createShiftDto: any): string {
    return this.shiftService.createShift(createShiftDto);
  }

  @Put()
  update(@Param('id') id: string, @Body() updateShiftDto: any): string {
    return this.shiftService.updateShift(id, updateShiftDto);
  }
}
