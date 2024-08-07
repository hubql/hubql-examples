import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { hubqlClient } from '@hubql/nestjs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);
  app.use(
    '/hubql',
    hubqlClient({
      settings: {},
      openAPIDoc: {
        url: '/swagger-json',
      },
    }),
  );
  await app.listen(3000);
}
bootstrap();
