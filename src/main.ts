import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
// import csurf from 'csurf';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SWAGGER_DOCUMENTATION_PATH } from './contants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  app.use(helmet());
  app.enableCors();
  app.use(cookieParser());
  // app.use(csurf());

  const config = new DocumentBuilder()
    .setTitle('First Nest App')
    .setDescription('My Nest App is here')
    .setVersion('v1')
    .addTag('Anubis')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(SWAGGER_DOCUMENTATION_PATH, app, document);

  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
  console.log(
    `Open API Documentation is running on: ${await app.getUrl()}/${SWAGGER_DOCUMENTATION_PATH}`,
  );
}
bootstrap();
