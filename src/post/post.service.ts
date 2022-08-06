import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreatePostInput } from 'src/types/graphql';

@Injectable()
export class PostService {

  constructor(private prisma: PrismaService) {}

  create({title, desc, authorId }: CreatePostInput) {
    return this.prisma.post.create({
      data: {
        title,
        desc,
        authorId
      }
    })
  }

  findAll() {
    return this.prisma.post.findMany();
  }

  findOne(id: number) {
    return this.prisma.post.findUnique({
      where: { id },

    })
  }

  remove(id: number) {
    return this.prisma.post.delete({
      where: { id },
    })
  }
}
