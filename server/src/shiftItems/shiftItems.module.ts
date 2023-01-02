import { Module } from '@nestjs/common';
import { ShiftItemsController } from './shiftItems.controller';
import { ShiftItemsService } from './shiftItems.service';

@Module({
  imports: [],
  controllers: [ShiftItemsController],
  providers: [ShiftItemsService],
})
export class ShiftItemsModule {}
