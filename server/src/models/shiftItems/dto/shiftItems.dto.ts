import { IsNotEmpty, IsString, IsDate } from 'class-validator';

export class CreateShiftItemDto {
  @IsNotEmpty()
  shiftId: string;
  @IsNotEmpty()
  @IsString()
  employeeId: string;
  @IsDate()
  startTimestamp: Date;
  @IsDate()
  endTimestamp?: Date;
}

export class UpdateShiftItemDto {
  @IsDate()
  endTime?: Date;
}
