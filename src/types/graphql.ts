
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
}

export class Auth {
    id: number;
    email: string;
    name: string;
}

export abstract class IQuery {
    abstract user(id: number): User | Promise<User>;

    abstract users(): User[] | Promise<User[]>;
}

export abstract class IMutation {
    abstract loginUser(loginUserInput: LoginUserInput): string | Promise<string>;

    abstract createUser(createUserInput: CreateUserInput): Auth | Promise<Auth>;

    abstract removeUser(): Nullable<User> | Promise<Nullable<User>>;
}

export class User {
    id: number;
    email?: Nullable<string>;
    name?: Nullable<string>;
}

type Nullable<T> = T | null;
