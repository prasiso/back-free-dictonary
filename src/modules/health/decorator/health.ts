import { applyDecorators, Get } from '@nestjs/common';

export function d_health() {
  return applyDecorators(Get());
}
