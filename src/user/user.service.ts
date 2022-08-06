import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateUserInput, UpdateUserInput } from 'src/types/graphql';

@Injectable()
export class UserService {

  constructor(private prisma: PrismaService) {}

  create({ name }: CreateUserInput) {
    return this.prisma.user.create({
      data: {
        name,
      }, 
    })
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
      select: { name: true, id: true, posts: true },
    })
  }

  update(id: number, { name }: UpdateUserInput) {
    return this.prisma.user.update({
      where: { id },
      data: {
        name,
      }
    })
  }

  remove(id: number) {
    return this.prisma.user.delete({
      where: { id },
    })
  }
}
