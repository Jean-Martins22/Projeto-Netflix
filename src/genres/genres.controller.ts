import {
  Controller,
  UsePipes,
  ValidationPipe,
  Get,
  Param,
  Body,
  Post,
  ParseIntPipe,
  Put,
  Delete,
} from '@nestjs/common';
import { GenresService } from './genres.service';
import { createGenresDto } from './dto/create.genres.dto';
import { Genre } from '.prisma/client';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@Controller('/v1/genres')
@ApiTags('Genres')
export class GenresController {
  constructor(private readonly genresService: GenresService) {}

  // route get all genres
  @Get('/list')
  @ApiOperation({ summary: 'List all genres' })
  @UsePipes(ValidationPipe)
  async getAll(): Promise<Genre[]> {
    return this.genresService.findMany();
  }

  // route by id genre
  @Get('/list/:id')
  @ApiOperation({ summary: 'Print by id genre' })
  @UsePipes(ValidationPipe)
  async getByIdGenre(@Param('id', ParseIntPipe) id: number) {
    return this.genresService.getByIdGenre(id);
  }

  // route create genre
  @Post('/create')
  @ApiOperation({ summary: 'Create genre' })
  @UsePipes(ValidationPipe)
  async createGenre(@Body() data: createGenresDto): Promise<Genre> {
    return this.genresService.createGenre(data);
  }

  // route update genre
  @Put('/update/:id')
  @ApiOperation({ summary: 'Update genre by id' })
  @UsePipes(ValidationPipe)
  async updateGenre(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: createGenresDto,
  ): Promise<Genre> {
    return this.genresService.updateGenre(id, data);
  }

  // route delete genre
  @Delete('/delete/:id')
  @ApiOperation({ summary: 'DElete genre by id' })
  @UsePipes(ValidationPipe)
  async deleteGenre(@Param('id', ParseIntPipe) id: number): Promise<Genre> {
    return this.genresService.deleteGenre(id);
  }
}
