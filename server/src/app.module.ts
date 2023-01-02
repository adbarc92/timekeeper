import { Module } from '@nestjs/common';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { ShiftsModule } from 'src/shifts/shifts.module';

@Module({
  imports: [ShiftsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
