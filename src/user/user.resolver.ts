import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { JwtAuthGuard } from 'src/auth/gql-auth.guard';
import { CurrentUser } from 'src/user/user.decorator';
import { UserService } from './user.service';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query('user')
  @UseGuards(JwtAuthGuard)
  findOne(@Args('id') id: number) {
    return this.userService.findOne(id);
  }

  @Query('users')
  @UseGuards(JwtAuthGuard)
  find(@CurrentUser() currentUser) {
    return this.userService.findAll(currentUser);
  }

  @Mutation('removeUser')
  @UseGuards(JwtAuthGuard)
  remove(@CurrentUser() currentUser) {
    return this.userService.remove(currentUser.id);
  }
}
