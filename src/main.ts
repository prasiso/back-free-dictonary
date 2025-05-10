import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { version } from '../package.json';
import { CustomExceptionFilter } from './filter'
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  //SWAGGER
  const config = new DocumentBuilder()
    .setTitle('Free-Dictonary')
    .setVersion(version)
    .addBearerAuth()
    .build();
  const document = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('document', app, document);

  // CUSTOM FILTER EXCEPTION
  app.useGlobalFilters(new CustomExceptionFilter());
  await app.listen(process.env.PORT ?? 80);
}
bootstrap();
