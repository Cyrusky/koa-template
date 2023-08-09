/*************************************************
 * Copyright (c) 2023.
 * Author: Cyrusky <bo.jin@borgor.cn>
 *************************************************/

import { type Context } from "koa";

import { ResponseInfo } from "@/constants/responses";

/**
 * 返回格式
 */
export interface IReturnInfo {
  code: number;
  message: string;
  data?: any;
}

/**
 * 统一返回格式
 */
export class ResponseBeautifier {
  /**
   * Return success
   * @param ctx
   * @param data
   * @param curMessage
   */
  public static success(ctx: Context, data: any, curMessage?: string) {
    ResponseBeautifier.responseByStatus(
      ctx,
      ResponseInfo.success,
      curMessage,
      data,
    );
  }

  /**
   * Return Resource not found
   * @param ctx
   * @param data
   * @param curMessage
   */
  public static notFound(ctx: Context, data?: any, curMessage?: string) {
    ResponseBeautifier.responseByStatus(
      ctx,
      ResponseInfo.notFound,
      curMessage,
      data,
    );
  }

  /**
   * Return response by status
   * @param ctx
   * @param statusInfo
   * @param curMessage
   * @param data
   */
  public static responseByStatus(
    ctx: Context,
    statusInfo = ResponseInfo.success,
    curMessage: string = "",
    data?: any,
  ) {
    const { code, message } = statusInfo;
    const info = { code, message: curMessage || message, data: undefined };
    if (data || data === 0) {
      info.data = data;
    }
    ResponseBeautifier.response(ctx, info);
  }

  /**
   * Return response
   * @param ctx
   * @param info
   */
  public static response(ctx: Context, info: IReturnInfo) {
    ctx.body = info;
  }
}
