import { NestFactory } from '@nestjs/core';
import { NextFunction, Request, Response } from 'express';
import * as path from 'path';
import { RootModule } from './root.module';
import * as fs from 'fs';


const filePath = path.join(__dirname,"..", 'count_request.txt');

/**
 * @Global_middleware
 */

function GlobalMiddlewareOne(req: Request, res: Response, next: NextFunction){
  console.log('global middleware one')
  next();
}

function NumberOfRequest(req: Request, res: Response, next: NextFunction){
  // Read the current count from the file
  let count = 0;
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    count = parseInt(data, 10) || 0;
  } catch (err) {
    // If the file doesn't exist or is empty, start with 0
    count = 0;
  }

  // Increment the count
  count++;

  // Write the updated count back to the file
  fs.writeFileSync(filePath, count.toString(), 'utf8');

  // Attach the count to the request object if needed
  req['requestCount'] = count;

  console.log(`Number of Request on server: ${count}`)
  next();
}

async function bootstrap() {
  const app = await NestFactory.create(RootModule);
  /***
   * setting up the global middlware
   */
  app.use(GlobalMiddlewareOne);
  app.use(NumberOfRequest);
  await app.listen(process.env.PORT ?? 3000, ()=>{
    console.log(`Server is running on port 3000`)
  });
}
bootstrap();
