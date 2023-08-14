import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto, SignInDto } from './auth.dtos';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  @ApiBody({ description: 'User Credentials', type: CreateUserDto })
  @ApiResponse({ status: 201, description: 'User registered successfully.' })
  @ApiResponse({ status: 409, description: 'Email already exists.' })
  signUp(
    @Body('email') email: string,
    @Body('password') password: string,
  ): Promise<void> {
    return this.authService.signUp(email, password);
  }

  @Post('/signin')
  @ApiBody({ description: 'User Credentials for Sign In', type: SignInDto })
  @ApiResponse({ status: 201, description: 'User signed in successfully.' })
  @ApiResponse({ status: 401, description: 'Invalid credentials.' })
  signIn(
    @Body('email') email: string,
    @Body('password') password: string,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(email, password);
  }
}
