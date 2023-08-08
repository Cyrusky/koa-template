import fs from "fs";
import jsonwebtoken from "jsonwebtoken";
import { type Context, type Middleware, type Next } from "koa";
import { isUndefined } from "lodash";
import path from "path";

import { config } from "@/configs";
import { ResponseInfo } from "@/constants/responses";
import { ResponseBeautifier } from "@/utils/ResponseUtils";

const jwtHeaderKey = (config.jwt.header ?? "X-Auth-Token").toLowerCase();

interface JwtMiddlewareOptions {
  ignorePattern?: RegExp[] | RegExp;
}

const privateKey = fs.readFileSync(
  path.join(
    config.jwt.certificates.dir,
    config.jwt.certificates.privateKeyName,
  ),
  "utf-8",
);

const publicKey = fs.readFileSync(
  path.join(config.jwt.certificates.dir, config.jwt.certificates.publicKeyName),
  "utf-8",
);

export class JwtUtils {
  public static sign(data: any) {
    return jsonwebtoken.sign(data, privateKey, {
      expiresIn: `${config.jwt.expiresIn} ${config.jwt.expiresInUnit}`,
      algorithm: "RS256",
    });
  }

  public static verify(jwt: string) {
    return jsonwebtoken.verify(jwt, publicKey, {
      algorithms: ["RS256"],
    });
  }

  public static middleware(options: JwtMiddlewareOptions): Middleware {
    const { ignorePattern } = options || {};
    return async (ctx: Context, next: Next) => {
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
      if (!ctx.headers[jwtHeaderKey]) {
        ResponseBeautifier.responseByStatus(
          ctx,
          ResponseInfo.parameterError,
          "auth token not found",
        );
      } else {
        if (JwtUtils.verify(ctx.headers[jwtHeaderKey] as string)) {
          await next();
        } else {
          ResponseBeautifier.responseByStatus(ctx, ResponseInfo.tokenError);
        }
      }
    };
  }
}
