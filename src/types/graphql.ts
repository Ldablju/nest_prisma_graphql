
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class LoginUserInput {
    email: string;
    password: string;
}

export class CreateUserInput {
    email: string;
    name: string;
    password: string;
    sex: string;
    lat?: Nullable<number>;
    lng?: Nullable<number>;
}

export class Auth {
    id: number;
    email: string;
    name: string;
    sex: string;
}

export abstract class IQuery {
    abstract user(id: number): User | Promise<User>;

    abstract findLove(): User[] | Promise<User[]>;
}

export abstract class IMutation {
    abstract loginUser(loginUserInput: LoginUserInput): string | Promise<string>;

    abstract createUser(createUserInput: CreateUserInput): string | Promise<string>;

    abstract removeUser(): string | Promise<string>;

    abstract changePassword(password: string): string | Promise<string>;
}

export class User {
    id: number;
    name?: Nullable<string>;
    location?: Nullable<number>;
}

type Nullable<T> = T | null;
