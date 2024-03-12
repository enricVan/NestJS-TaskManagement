import { Body, Controller, Post } from '@nestjs/common';
import { AuthCrientialsDto } from './dto/auth-cridentials.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body() authCridentialsDto: AuthCrientialsDto): Promise<void> {
    return this.authService.signUp(authCridentialsDto);
  }

  @Post('/signin')
  signIn(
    @Body() authCridentialsDto: AuthCrientialsDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(authCridentialsDto);
  }
}
