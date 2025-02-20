import { NestFactory } from '@nestjs/core';
import { RootModule } from './root.module';
import { NumberOfRequest } from './Middlewares/global.middlewares';




async function bootstrap() {
  const app = await NestFactory.create(RootModule);
  /***
   * setting up the global middlware for counting the number of request
   */

  app.use(NumberOfRequest);

  await app.listen(process.env.PORT ?? 3000, ()=>{
    console.log(`Server is running on port 3000`)
  });
}
bootstrap();
