import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';
export class createParticipantsDto {
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @ApiProperty()
  image: string;

  @IsNotEmpty()
  @ApiProperty()
  birth: string;

  @IsNotEmpty()
  @ApiProperty()
  staff: string;

  @IsOptional()
  @ApiPropertyOptional()
  movieId: number;
}
