import { applyDecorators } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { ResponseGlobalSwagger } from 'src/decorator/response_global_swagger';
export const ResponseSwagger = () => {
  return applyDecorators(
    ResponseGlobalSwagger(),
    ApiResponse({
      status: 404,
      content: {
        'application/json': {
          examples: {
            not_found_word: {
              summary: 'Não foi encontrada palavra',
              value: {
                timestamp: '2025-05-10T20:17:37.186Z',
                path: '/',
                status: 400,
                message: 'Não foi encontrada palavra',
              }
            },
            not_found_word_favorite: {
              summary: 'Não foi encontrada palavra favoritada',
              value: {
                timestamp: '2025-05-10T20:17:37.186Z',
                path: '/',
                status: 400,
                message: 'Não foi encontrada palavra favoritada',
              }
            }
          }
        },
      },
    }),
  );
};
