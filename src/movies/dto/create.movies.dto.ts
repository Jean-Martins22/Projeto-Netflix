import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class createMoviesDto {
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsOptional()
  @ApiPropertyOptional()
  image?: string;

  @IsNotEmpty()
  @ApiProperty()
  date_published: string;

  @IsNotEmpty()
  @ApiProperty()
  duration: string;
}
