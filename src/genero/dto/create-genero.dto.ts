import { IsNotEmpty } from 'class-validator';

export class CreateGeneroDto {
  @IsNotEmpty()
  nome: string;
}
