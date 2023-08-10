/*************************************************
 * Copyright (c) 2023.
 * Author: Cyrusky <bo.jin@borgor.cn>
 *************************************************/

import { ResponseInfo } from "@/constants/responses";
import {
  type ApiPagedData,
  type ApiPagedResponse,
  type ApiResponse,
} from "@@/types";

export class Response {
  public static response<T = ApiResponse>(info: ApiResponse<T>) {
    return info;
  }

  public static success<T = Record<string, unknown>>(
    data: T,
    curMessage?: string,
  ): ApiResponse<T> {
    return Response.responseByStatus<T>(
      ResponseInfo.success,
      curMessage,
      data,
    ) as ApiResponse<T>;
  }

  public static successWithPaged<T>(
    data: T[],
    total: number,
    page: number,
    pageSize: number,
    curMessage?: string,
  ): ApiPagedResponse<T> {
    return Response.responseByStatus<ApiPagedData<T>>(
      ResponseInfo.success,
      curMessage,
      {
        total,
        page,
        pageSize,
        data,
      },
    ) as ApiPagedResponse<T>;
  }

  public static notFound<T = Record<string, unknown>>(
    data?: T,
    curMessage?: string,
  ) {
    return Response.responseByStatus(ResponseInfo.notFound, curMessage, data);
  }

  public static serverInternalError(message?: string) {
    return Response.responseByStatus(ResponseInfo.internalServerError, message);
  }

  public static badRequest(message?: string) {
    return Response.responseByStatus(ResponseInfo.badRequest, message);
  }

  public static tokenError(message?: string) {
    return Response.responseByStatus(ResponseInfo.tokenError, message);
  }

  private static responseByStatus<T = Record<string, unknown>>(
    statusInfo = ResponseInfo.success,
    curMessage: string = "",
    data?: T,
  ): ApiResponse<T> | ApiPagedResponse<T> {
    const { code, message } = statusInfo;
    const response: ApiResponse<T> = {
      code,
      message: curMessage || message,
    };
    if (data) {
      response.data = data;
    }
    return Response.response(response);
  }
}
