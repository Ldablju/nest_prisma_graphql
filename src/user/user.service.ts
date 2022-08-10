import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { User } from 'src/types/graphql';

@Injectable()
export class UserService {

  constructor(private prisma: PrismaService) {}

  findAll(user: User) {
    console.log(`this is user: ${user.id}`)
    return this.prisma.user.findMany()
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
      select: { name: true, id: true },
    })
  }

  remove(id: number) {
    return this.prisma.user.delete({
      where: { id },
      select: { id: true, email: true, name: true }
    })
  }
}
