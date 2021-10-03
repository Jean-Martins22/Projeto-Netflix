import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Participant, Prisma } from '.prisma/client';

@Injectable()
export class ParticipantsService {
  constructor(private readonly prisma: PrismaService) {}

  // function get all participants
  findMany(): Promise<Participant[]> {
    return this.prisma.participant.findMany();
  }

  // function get by id participant
  getByIdParticipant(participantId: number): Promise<Participant> {
    return this.prisma.participant.findUnique({
      where: { id: participantId },
    });
  }

  // function create participant
  createParticipant(data: Prisma.ParticipantCreateInput): Promise<Participant> {
    return this.prisma.participant.create({
      data,
    });
  }

  // function update participant
  updateParticipant(
    participantId: number,
    data: Prisma.ParticipantCreateInput,
  ): Promise<Participant> {
    return this.prisma.participant.update({
      where: { id: participantId },
      data,
    });
  }

  // function delete participant
  deleteParticipant(participantId: number): Promise<Participant> {
    return this.prisma.participant.delete({
      where: { id: participantId },
    });
  }
}
