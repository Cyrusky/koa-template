import { type Context, type Middleware, type Next } from "koa";
import { isUndefined } from "lodash";

import { Services } from "@/services";

const { LogService } = Services;

const jwtHeaderKey = process.env.JWT_HEADER ?? "X-Auth-Token";

interface JwtMiddlewareOptions {
  ignorePattern?: RegExp[] | RegExp;
}

export class JwtUtils {
  public static async sign() {}

  public static async verify() {}

  public static middleware(options: JwtMiddlewareOptions): Middleware {
    const { ignorePattern } = options || {};
    return async (ctx: Context, next: Next) => {
      /**
       * Ignore the patterns in ignorePattern
       */
      const patters = [];
      if (Array.isArray(ignorePattern)) {
        patters.push(...ignorePattern);
      } else if (!isUndefined(ignorePattern)) {
        patters.push(ignorePattern);
      }
      for (const patter of patters) {
        if (patter.test(ctx.url)) {
          return await next();
        }
      }
      //
      await next();
    };
  }
}
