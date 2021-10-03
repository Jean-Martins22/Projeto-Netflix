import {
  Controller,
  ValidationPipe,
  UsePipes,
  ParseIntPipe,
  Get,
  Post,
  Body,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { ParticipantsService } from './participants.service';
import { createParticipantsDto } from './dto/create.participants.dto';
import { Participant } from '.prisma/client';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@Controller('/v1/participants')
@ApiTags('Participants')
export class ParticipantsController {
  constructor(private readonly participantsService: ParticipantsService) {}

  // route get all participants
  @Get('/list')
  @ApiOperation({ summary: 'List all participants' })
  @UsePipes(ValidationPipe)
  async getAll(): Promise<Participant[]> {
    return this.participantsService.findMany();
  }

  // route by id participant
  @Get('/list/:id')
  @ApiOperation({ summary: 'Print by id participant' })
  @UsePipes(ValidationPipe)
  async getByIdParticipant(@Param('id', ParseIntPipe) id: number) {
    return this.participantsService.getByIdParticipant(id);
  }

  // route create participant
  @Post('/create')
  @ApiOperation({ summary: 'Create participant' })
  @UsePipes(ValidationPipe)
  async createParticipant(
    @Body() data: createParticipantsDto,
  ): Promise<Participant> {
    return this.participantsService.createParticipant(data);
  }

  // route update participant by id
  @Put('/update/:id')
  @ApiOperation({ summary: 'Update participant by id' })
  @UsePipes(ValidationPipe)
  async updateParticipant(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: createParticipantsDto,
  ): Promise<Participant> {
    return this.participantsService.updateParticipant(id, data);
  }

  // route delete one participants by id
  @Delete('/delete/:id')
  @ApiOperation({ summary: 'Delete by id one participant' })
  @UsePipes(ValidationPipe)
  async deleteOneParticipant(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Participant> {
    return this.participantsService.deleteParticipant(id);
  }
}
