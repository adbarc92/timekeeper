import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import {
  CreateShiftDto,
  UpdateShiftDto,
} from 'src/models/shifts/dto/shifts.dto';
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
  create(@Body() createShiftDto: CreateShiftDto): string {
    return this.shiftService.createShift(createShiftDto);
  }

  @Put()
  update(
    @Param('id') id: string,
    @Body() updateShiftDto: UpdateShiftDto,
  ): string {
    return this.shiftService.updateShift(id, updateShiftDto);
  }
}
