import { LoginUserInput, User, CreateUserInput } from './../types/graphql';
import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
        private prisma: PrismaService,
        private jwtService: JwtService,
    ) {}

    async loginUser(loginUserInput: LoginUserInput){
        
        const user = await this.prisma.user.findUnique({
            where: {
                email: loginUserInput.email
            }
        })

        if(!user)
            throw new BadRequestException(`User doesn't exist`)

        if(!(await bcrypt.compare(loginUserInput.password, user.password)))
            throw new UnauthorizedException('Incorrect password')

        
        return this.jwtService.sign({
            id: user.id
        })
    }

    async createUser(createUserInput: CreateUserInput) {
        const hashPassword = await bcrypt.hash(createUserInput.password, 10);
        const user = await this.prisma.user.findUnique({
            where: {
                email: createUserInput.email
            }
        })

        if(user)
            throw new BadRequestException(`Email already in use`)


        await this.prisma.user.create({
            data: {
                email: createUserInput.email,
                name: createUserInput.name,
                password: hashPassword,
                sex: createUserInput.sex,
                location: createUserInput.lat + createUserInput.lng
            }
        })

        return 'User was created successfully'
    }

}
