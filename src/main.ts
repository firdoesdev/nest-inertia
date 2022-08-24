import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
const inertia = require('inertia-node');

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'public'));
  // app.setBaseViewsDir(join(__dirname, '..', 'views'));

  const html = (pageString) => `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Nest Inertia</title>
      <link rel="stylesheet" href="/resource/main.css">
      <script defer type="module" src="/resource/bundle.js"></script>
  </head>
  <body>
      
  <body id="app" data-page='${pageString}'></body>
  </body>
  </html>`;

  app.use(inertia(html, 1));

  await app.listen(3000);
}
bootstrap();
