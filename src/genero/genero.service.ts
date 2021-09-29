import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Genero, Prisma } from '.prisma/client';

@Injectable()
export class GeneroService {
  constructor(private prisma: PrismaService) {}

  async createGenero(data: Prisma.GeneroCreateInput): Promise<Genero> {
    return this.prisma.genero.create({
      data,
    });
  }

  async getAll(): Promise<Genero[]> {
    return this.prisma.genero.findMany();
  }

  async deleteOneGenero(where: Prisma.GeneroWhereUniqueInput): Promise<Genero> {
    return this.prisma.genero.delete({ where });
  }

  async updateOneGenero(
    generoId: number,
    data: Prisma.GeneroCreateInput,
  ): Promise<Genero> {
    return this.prisma.genero.update({
      data,
      where: {
        id: generoId,
      },
    });
  }

  async getOneGenero(generoId: number): Promise<Genero> {
    return this.prisma.genero.findUnique({
      where: {
        id: generoId,
      },
    });
  }
}
