import { Genre, Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GenresService {
  constructor(private readonly prisma: PrismaService) {}

  // functions all genres
  async findMany(): Promise<Genre[]> {
    return this.prisma.genre.findMany();
  }

  // function by id genre
  async getByIdGenre(genreId: number): Promise<Genre> {
    return this.prisma.genre.findUnique({
      where: {
        id: genreId,
      },
    });
  }

  // function create genre
  async createGenre(data: Prisma.GenreCreateInput): Promise<Genre> {
    return this.prisma.genre.create({ data });
  }

  // function update genre
  async updateGenre(genreId: number, data: Prisma.GenreCreateInput) {
    return this.prisma.genre.update({
      where: { id: genreId },
      data,
    });
  }

  // function delete genre
  async deleteGenre(id: number) {
    return this.prisma.genre.delete({
      where: { id },
    });
  }
}
