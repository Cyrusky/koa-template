import { type Context, type Middleware, type Next } from "koa";

import { ResponseInfo } from "@/constants/responses";
import { ResponseBeautifier } from "@/utils/ResponseUtils";

export class Exceptions {
  public static middleware: Middleware = async (ctx: Context, next: Next) => {
    try {
      await next();
      if (!ctx.body) {
        ResponseBeautifier.notFound(ctx);
      }
    } catch (err: any) {
      ResponseBeautifier.responseByStatus(
        ctx,
        ResponseInfo.internalServerError,
        process.env.NODE_ENV === "development" ? err.toString() : undefined,
      );
    }
  };
}
