/*************************************************
 * Copyright (c) 2023.
 * Author: Cyrusky <bo.jin@borgor.cn>
 *************************************************/

import "@/controller/TestController";

import Koa from "koa";
import bodyParser from "koa-bodyparser";
import koa_json from "koa-json";
import koa_cors from "koa2-cors";
import { Exceptions } from "src/utils/exceptions";

import { JwtUtils } from "@/utils/jwt";
import { LoggerMiddleware } from "@/utils/logger";

const app = new Koa();

app.use(LoggerMiddleware);
app.use(Exceptions.middleware);
app.use(koa_cors());
app.use(bodyParser());
app.use(koa_json());
app.use(
  JwtUtils.middleware({
    ignorePattern: [/^\/test\/sign/],
  }),
);

// routers.forEach((router) => {
//   app.use(router.routes()).use(router.allowedMethods());
// });

export default app;
