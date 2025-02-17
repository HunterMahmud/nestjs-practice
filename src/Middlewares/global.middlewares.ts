 import { NextFunction, Request, Response } from 'express';
 import * as path from 'path';
 import * as fs from 'fs';
 
 const filePath = path.join(__dirname,"../..", 'count_request.txt');


/**
 * @Global_middleware
 */

export function NumberOfRequest(req: Request, _res: Response, next: NextFunction){
  // Read the current count from the file
  let count = 0;
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    // console.log("data is : ", data)
    count = parseInt(data, 10) || 0;
    // Increment the count
    count++;
    // Write the updated count back to the file
    fs.writeFileSync(filePath, count.toString(), 'utf8');
  } catch (err) {
    // If the file doesn't exist or is empty, start with 0
    if(err.code === 'ENOENT'){
        console.warn('No such file found on this path:', filePath)
    }
    count = 0;
  }



  // Attach the count to the request object if needed
  req['requestCount'] = count;

//   console.log(`Number of Request on server: ${count}`)
  next();
}