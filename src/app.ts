/*
 * Copyright (c) 2022. .
 * Author: Cyrusky <bo.jin@borgor.cn>.
 */

import fs from "fs";
import Koa from "koa";
import bodyParser from "koa-bodyparser";
import koa_json from "koa-json";
import type Router from "koa-router";
import koa_cors from "koa2-cors";
import path from "path";

import { Exceptions } from "@/utils/Exceptions";
import { JwtUtils } from "@/utils/jwt";
import { LoggerMiddleware } from "@/utils/logger";

const app = new Koa();

app.use(Exceptions.middleware);
app.use(LoggerMiddleware);
app.use(koa_cors());
app.use(bodyParser());
app.use(koa_json());
app.use(JwtUtils.middleware({}));

if (fs.existsSync(path.resolve(__dirname, "./router"))) {
  fs.readdirSync(path.resolve(__dirname, "./router")).forEach((file) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const route: Router = require(path.join(__dirname, "router", file)).default;
    app.use(route.routes()).use(route.allowedMethods());
  });
}
export default app;
