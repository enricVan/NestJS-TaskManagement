import { Transform } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  description: string;
}
