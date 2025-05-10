import { applyDecorators, Post } from '@nestjs/common';
import { Swagger } from './swagger';

export function d_signup() {
  return applyDecorators(Post('signup'), Swagger());
}
