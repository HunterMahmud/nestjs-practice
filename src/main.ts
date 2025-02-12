import { NestFactory } from '@nestjs/core';
import { RootModule } from './root.module';

async function bootstrap() {
  const app = await NestFactory.create(RootModule);
  await app.listen(process.env.PORT ?? 3000, ()=>{
    console.log(`Server is running on port 3000`)
  });
}
bootstrap();
