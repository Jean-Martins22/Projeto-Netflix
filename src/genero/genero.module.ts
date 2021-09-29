import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { GeneroController } from './genero.controller';
import { GeneroService } from './genero.service';

@Module({
  imports: [PrismaModule],
  controllers: [GeneroController],
  providers: [GeneroService],
})
export class GeneroModule {}
