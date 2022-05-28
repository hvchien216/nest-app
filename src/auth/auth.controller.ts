import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

// authService: AuthService;
// constructor(authService: AuthService) {
//   this.authService = authService;
// }
//same below
// constructor(private authService: AuthService) {}

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  signIn(@Body() dto: AuthDto) {
    return this.authService.signIn(dto);
  }

  @Post('signup')
  signUp(@Body() dto: AuthDto) {
    console.log('dt=====>', { dto });
    return this.authService.signUp(dto);
  }
}
