import { UserModule } from './../user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategy/auth.strategy';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule,
    UserModule,
    JwtModule.register({
      signOptions: { expiresIn: '600s' },
      secret: process.env.JWT_SECRET
    }),
    ConfigModule.forRoot(),
  ],
  providers: [AuthService, AuthResolver, JwtStrategy]
})
export class AuthModule {}
