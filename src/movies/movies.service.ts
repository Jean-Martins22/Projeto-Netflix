import { Injectable } from '@nestjs/common';
import { Movie, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class MoviesService {
  constructor(private prisma: PrismaService) {}

  // functions get all movies
  async findMany(): Promise<Movie[]> {
    return this.prisma.movie.findMany({
      include: {
        participants: {
          select: {
            name: true,
            image: true,
            birth: true,
            staff: true,
          },
        },
        genre: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  // function by id movies
  async getByIdMovies(movieId: number): Promise<Movie> {
    return this.prisma.movie.findUnique({
      where: {
        id: movieId,
      },
      include: {
        participants: {
          select: {
            name: true,
            image: true,
            birth: true,
            staff: true,
          },
        },
        genre: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  // function create movie
  async createMovie(data: Prisma.MovieCreateInput): Promise<Movie> {
    return this.prisma.movie.create({ data });
  }

  // functions update movie
  async updateMovie(
    movieId: number,
    data: Prisma.MovieCreateInput,
  ): Promise<Movie> {
    return this.prisma.movie.update({
      where: { id: movieId },
      data,
    });
  }

  // functions delete one movie
  async deleteMovie(id: number): Promise<Movie> {
    return this.prisma.movie.delete({
      where: { id },
    });
  }
}
