import { NestFactory } from '@nestjs/core';
import { RootModule } from './root.module';
import { NumberOfRequest } from './Middlewares/global.middlewares';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';




async function bootstrap() {
  const app = await NestFactory.create(RootModule);
  /***
   * setting up the global middlware for counting the number of request
   */

  

  app.use(NumberOfRequest);

  /**
   * @OpenAPI -- documentation using swagger
   */

  const config = new DocumentBuilder()
  .setTitle('User example api')
  .setDescription('The users API description')
  .setVersion('1.0')
  .addTag('users')
  .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000, ()=>{
    console.log(`Server is running on port 3000`)
  });
}
bootstrap();
