import { applyDecorators, Post } from '@nestjs/common';
import { Swagger } from './swagger';

export function d_sign_up() {
  return applyDecorators(Post('signup'), Swagger());
}
