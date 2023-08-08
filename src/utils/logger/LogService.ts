import { type Context, type Next } from "koa";
import log4js, { type Logger } from "log4js";
import { Service } from "typedi";

import { ServicesNames } from "../../constants/services";

const isDev = process.env.NODE_ENV === "development";

@Service(ServicesNames.LogService)
export class LogService {
  private readonly logger: Logger;

  constructor() {
    log4js.getLogger("default");
  }

  get db(): Logger {
    return isDev ? log4js.getLogger("default") : log4js.getLogger("db");
  }

  get sys(): Logger {
    return isDev ? log4js.getLogger("default") : log4js.getLogger("systemInfo");
  }

  get access(): Logger {
    return isDev ? log4js.getLogger("default") : log4js.getLogger("netError");
  }

  get accErr(): Logger {
    return isDev
      ? log4js.getLogger("default")
      : log4js.getLogger("accessError");
  }

  async LogMiddleWare(ctx: Context, next: Next) {
    this.access.info(`${ctx.method} ${ctx.url}`);
    const start = new Date();
    await next().then(() => {
      const ms = new Date().getTime() - start.getTime();
      this.access.info(`${ctx.method} ${ctx.url} - ${ms}ms`);
    });
  }
}
