import "dotenv/config";
import "reflect-metadata";
import "@/services/register";

import { getArgs, runServer } from "@/utils/Server";

const params = getArgs();

console.log(params);

switch (true) {
  case params.env:
    console.log(process.env);
    break;
  case params.run:
  default:
    runServer();
    break;
}
