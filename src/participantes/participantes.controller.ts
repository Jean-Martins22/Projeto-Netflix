import {
  Body,
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Put,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateParticipanteDto } from './dto/create-participantes.dto';
import { ParticipantesService } from './participantes.service';
import { Participante } from '.prisma/client';

@Controller('participantes')
export class ParticipantesController {
  constructor(private participantesService: ParticipantesService) {}

  @Post('/create')
  @UsePipes(ValidationPipe)
  async create(
    @Body() createParticipante: CreateParticipanteDto,
  ): Promise<Participante> {
    return this.participantesService.createParticipante(createParticipante);
  }

  @Get('/listar')
  @UsePipes(ValidationPipe)
  async findMany(): Promise<Participante[]> {
    return this.participantesService.getAll();
  }

  @Delete('/delete/:id')
  @UsePipes(ValidationPipe)
  async delete(@Param('id') id: string) {
    return this.participantesService.deleteOneParticipante({ id: Number(id) });
  }

  @Put('/update/:id')
  @UsePipes(ValidationPipe)
  async update(
    @Body() updateFilme: CreateParticipanteDto,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Participante> {
    return this.participantesService.updateOneParticipante(id, updateFilme);
  }

  @Get('/list/:id')
  @UsePipes(ValidationPipe)
  async findUnique(@Param('id', ParseIntPipe) id: number) {
    return this.participantesService.getOneParticipante(id);
  }
}
