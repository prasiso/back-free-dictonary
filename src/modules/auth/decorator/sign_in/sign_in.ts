import { applyDecorators, Post } from '@nestjs/common';
import { Swagger } from './swagger';

export function d_sign_in() {
  return applyDecorators(Post('signin'), Swagger());
}
