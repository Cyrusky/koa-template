import { type Context, type Middleware, type Next } from "koa";

import { Services } from "@/services";

const { LogService } = Services;

export class JwtUtils {
  public static async sign() {}

  public static async verify() {}
}

export const JwtMiddleware: Middleware = (ctx: Context, next: Next) => {
  LogService.access.info("Access the jwt middleware");
  next().catch((err) => {
    LogService.accErr.error(err);
  });
};
