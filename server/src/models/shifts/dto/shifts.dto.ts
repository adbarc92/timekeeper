import { IsDate, Min, Max } from 'class-validator';

export class CreateShiftDto {
  @IsDate()
  date: string;
  @Min(0)
  @Max(24)
  startHour: number;
  @Min(0)
  @Max(24)
  endHour: number;
  employeeIds?: number[];
}

export class UpdateShiftDto {
  @IsDate()
  date?: string;
  @Min(0)
  @Max(24)
  startHour?: number;
  @Min(0)
  @Max(24)
  endHour?: number;
  employeeIds?: number[];
}
