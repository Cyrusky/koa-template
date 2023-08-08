import { type Context, type Next } from "koa";

import { ResponseInfo } from "@/constants/responses";
import { Services } from "@/services";
import { ResponseBeautifier } from "@/utils/ResponseUtils";

const { LogService } = Services;

export class TestController {
  public static async getParamWeChatCode(ctx: Context, next: Next) {
    const { code } = ctx.query;
    LogService.access.info(`code: 123}`);
    if (!code) {
      ResponseBeautifier.responseByStatus(
        ctx,
        ResponseInfo.parameterError,
        "code不能为空",
      );
    } else {
      ResponseBeautifier.success(ctx, code);
    }
    await next();
  }
}
