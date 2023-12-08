import { IsNotEmpty, IsEmail, IsStrongPassword } from 'class-validator';
export class User {
    @IsNotEmpty({
        message: 'custom message'
    })
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsStrongPassword()
    password: String;

    @IsNotEmpty()
    fullName: string;
}