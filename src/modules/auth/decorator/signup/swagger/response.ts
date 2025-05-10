import { applyDecorators } from '@nestjs/common';
import { ApiExtraModels, ApiResponse } from '@nestjs/swagger';
import { ResponseGlobalSwagger } from 'src/decorator/response_global_swagger';
import { Resp200Dto } from './dto-response';
export const ResponseSwagger = () => {
  return applyDecorators(
    ResponseGlobalSwagger(false),
    ApiResponse({
      status: 200,
      type: Resp200Dto,
    }),
    ApiResponse({
      status: 400,
      content: {
        'application/json': {
          examples: {
            dto: {
              summary: 'Dto Inválido',
              value: {
                timestamp: '2025-05-10T20:17:37.186Z',
                path: '/',
                status: 400,
                message: [
                  'Campo nome não pode ser vazio',
                  'Campo Senha não pode ser vazio',
                  'Campo email não pode ser vazio',
                  'A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma letra minúscula, um número e um caractere especial.',
                ],
              },
            },
            usuarioExist: {
              summary: 'Email encontrado',
              value: {
                timestamp: '2025-05-10T20:17:37.186Z',
                path: '/',
                status: 400,
                message:
                  'O e-mail informado já está cadastrado em nosso sistema. Por favor, utilize outro e-mail.',
              },
            },
          },
        },
      },
    }),
  );
};
