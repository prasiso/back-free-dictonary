import { applyDecorators, Get } from '@nestjs/common';
import { Swagger } from './swagger';

export function d_health() {
  return applyDecorators(Get(), Swagger());
}
