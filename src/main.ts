import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  // configuração de validação de requisições das rotas (Pipes)
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('API Netflix - Módulo 4 Back-End - Blue Edtech')
    .setDescription(
      'API criada entrega de trabalho e firmar conceitos de backend, utilizando citadas logo acima. Nessa Foi desenvolvido um CRUD completo e relacionamento entre Filmes, Gêneros e Participantes.',
    )
    .setVersion('1.0')
    .addTag('Netflix')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
