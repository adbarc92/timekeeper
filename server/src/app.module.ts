import { Module } from '@nestjs/common';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { ShiftItemsModule } from 'src/models/shiftItems/shiftItems.module';
import { ShiftsModule } from 'src/models/shifts/shifts.module';
import TypeOrmConfig from 'src/config/database/mysql/configuration';

@Module({
  imports: [TypeOrmConfig, ShiftsModule, ShiftItemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
