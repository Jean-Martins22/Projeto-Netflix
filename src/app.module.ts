import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';
import { MoviesModule } from './movies/movies.module';
import { GenresController } from './genres/genres.controller';
import { GenresService } from './genres/genres.service';
import { GenresModule } from './genres/genres.module';
import { ParticipantsController } from './participants/participants.controller';
import { ParticipantsModule } from './participants/participants.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { ParticipantsService } from './participants/participants.service';

@Module({
  imports: [MoviesModule, GenresModule, ParticipantsModule, PrismaModule],
  controllers: [
    AppController,
    MoviesController,
    GenresController,
    ParticipantsController,
  ],
  providers: [
    AppService,
    MoviesService,
    GenresService,
    ParticipantsService,
    PrismaService,
  ],
})
export class AppModule {}
