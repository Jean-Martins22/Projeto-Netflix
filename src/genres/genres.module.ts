import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { GenresController } from './genres.controller';
import { GenresService } from './genres.service';

@Module({
  imports: [PrismaModule],
  providers: [GenresService, PrismaService],
  controllers: [GenresController],
})
export class GenresModule {}
