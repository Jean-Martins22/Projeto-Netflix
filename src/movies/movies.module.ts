import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

@Module({
  imports: [PrismaModule],
  providers: [MoviesService, PrismaService],
  controllers: [MoviesController],
})
export class MoviesModule {}
