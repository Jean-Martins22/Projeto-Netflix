import {
  Body,
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Put,
  ValidationPipe,
  UsePipes,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { GeneroService } from './genero.service';
import { Genero } from '.prisma/client';

@Controller('genero')
export class GeneroController {
  constructor(private generoService: GeneroService) {}

  @Get('/list')
  @UsePipes(ValidationPipe)
  async findMany(): Promise<Genero[]> {
    return this.generoService.getAll();
  }

  @Post('/create')
  @UsePipes(ValidationPipe)
  async create(@Body() createGenero: CreateGeneroDto): Promise<Genero> {
    return this.generoService.createGenero(createGenero);
  }

  @Delete('/delete/:id')
  @UsePipes(ValidationPipe)
  async delete(@Param('id') id: string) {
    return this.generoService.deleteOneGenero({ id: Number(id) });
  }

  @Put('/update/:id')
  @UsePipes(ValidationPipe)
  async update(
    @Body() updateGenero: CreateGeneroDto,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Genero> {
    return this.generoService.updateOneGenero(id, updateGenero);
  }

  @Get('/list/:id')
  @UsePipes(ValidationPipe)
  async findUnique(@Param('id', ParseIntPipe) id: number) {
    return this.generoService.getOneGenero(id);
  }
}
