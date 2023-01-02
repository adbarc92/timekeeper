import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ShiftItemsService } from './shiftItems.service';

@Controller('shift-items')
export class ShiftItemsController {
  constructor(private readonly shiftItemsService: ShiftItemsService) {}

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return this.shiftItemsService.getShiftItem(id);
  }

  @Get()
  findAll(): string {
    return this.shiftItemsService.getShiftItems();
  }

  @Post()
  create(@Body() createShiftItemDto: any): string {
    return this.shiftItemsService.createShiftItem(createShiftItemDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateShiftItemDto: any) {
    return this.shiftItemsService.updateShiftItem(id, updateShiftItemDto);
  }
}
