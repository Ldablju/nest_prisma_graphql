import { CreateUserInput } from './../types/graphql';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LoginUserInput } from 'src/types/graphql';
import { AuthService } from './auth.service';

@Resolver()
export class AuthResolver {

    constructor(private readonly authService: AuthService) {}

    @Mutation('loginUser')
    loginUser(@Args('loginUserInput') loginUserInput: LoginUserInput) {
        return this.authService.loginUser(loginUserInput)
    }

    @Mutation('createUser')
    createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
        return this.authService.createUser(createUserInput)
    }

}
