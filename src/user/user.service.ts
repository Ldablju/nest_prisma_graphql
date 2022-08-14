import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { User } from 'src/types/graphql';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {

  constructor(private prisma: PrismaService) {}

  async findUser(user: User) {

    const currentUser =  await this.prisma.user.findUnique({
      where: { id: user.id }
    })

    const location = currentUser.setDistance / 111
    const allUser = await this.prisma.user.findMany({
      select: { id: true, name: true, location: true }
    })
    return allUser.filter(oneUser => oneUser.location > currentUser.location - location && oneUser.location < currentUser.location + location && oneUser.id !== currentUser.id)
  }

  findUserById(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
      select: { name: true, id: true, location: true },
    })
  }

  async changePassword(id: number, passowrd: string){
    const hashPassword = await bcrypt.hash(passowrd, 10)
    this.prisma.user.update({
      where: { id, },
      data: {
        password: hashPassword
      }
    })
    return 'Password was changed successfully'
  }

  remove(id: number) {
    this.prisma.user.delete({
      where: { id },
      select: { id: true, email: true, name: true }
    })
    return 'User was removed successfully'
  }
  
}
