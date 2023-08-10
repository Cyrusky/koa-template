/*************************************************
 * Copyright (c) 2023.
 * Author: Cyrusky <bo.jin@borgor.cn>
 *************************************************/

import "dotenv/config";
import "reflect-metadata";
import "@/services/register";

import { getArgs, runServer } from "@/utils/Server";

const params = getArgs();

switch (true) {
  case params.env:
    console.log(process.env);
    break;
  case params.run:
  default:
    runServer();
    break;
}
