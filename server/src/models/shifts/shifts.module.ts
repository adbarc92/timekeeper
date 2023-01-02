import { Module } from '@nestjs/common';
import { ShiftsController } from './shifts.controller';
import { ShiftsService } from './shifts.service';

@Module({
  imports: [],
  controllers: [ShiftsController],
  providers: [ShiftsService],
})
export class ShiftsModule {}
