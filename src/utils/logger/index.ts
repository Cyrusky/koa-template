import "./loggerConfig";

import type Koa from "koa";
import { type Context, type Next } from "koa";

import { Services } from "../../services";

export * from "./LogService";

const { LogService } = Services;

export const LoggerMiddleware: Koa.Middleware = (ctx: Context, next: Next) => {
  LogService.access.info(`${ctx.method} ${ctx.url}`);
  next().catch((err) => {
    LogService.accErr.error(err);
  });
};
