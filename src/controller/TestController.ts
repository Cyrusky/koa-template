import { type Context, type Next } from "koa";

import { ResponseBeautifier } from "@/utils/ResponseUtils";

export class TestController {
  public static async getParamWeChatCode(ctx: Context, next: Next) {
    ResponseBeautifier.success(ctx, { status: "success" });
  }

  public static async verifyJwtCodeIsCorrect(ctx: Context, next: Next) {
    ResponseBeautifier.success(ctx, { status: "success" });
  }
}
