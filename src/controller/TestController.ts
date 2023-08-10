/*************************************************
 * Copyright (c) 2023.
 * Author: Cyrusky <bo.jin@borgor.cn>
 *************************************************/
import { Response } from "@/utils/ResponseUtils";
import { Controller, Get } from "@/utils/router";
import { type ApiMiddleware } from "@@/types";

@Controller("/test")
export class TestController {
  @Get("/wechat-applet-auth")
  public static getParamWeChatCode: ApiMiddleware = async (ctx, next) => {
    ctx.body = Response.success({
      name: "Cyrusky",
    });
  };

  @Get("/wechat-applet-auth1")
  public verifyJwtCodeIsCorrect: ApiMiddleware = (ctx, next) => {};
}
