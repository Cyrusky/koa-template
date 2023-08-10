/*************************************************
 * Copyright (c) 2023.
 * Author: Cyrusky <bo.jin@borgor.cn>
 *************************************************/
import { type Context, type Next } from "koa";

import { Response } from "@/utils/ResponseUtils";
import { type ApiMiddleware } from "@@/types";

export class Exceptions {
  public static middleware: ApiMiddleware = async (
    ctx: Context,
    next: Next,
  ) => {
    try {
      await next();
      if (!ctx.body) {
        Response.notFound(ctx);
      }
    } catch (err: any) {
      ctx.body = Response.serverInternalError(
        process.env.NODE_ENV === "development" ? err.toString() : undefined,
      );
    }
  };
}
