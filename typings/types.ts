/*************************************************
 * Copyright (c) 2023.
 * Author: Cyrusky <bo.jin@borgor.cn>
 *************************************************/
import { type DefaultContext, type DefaultState, type Middleware } from "koa";

export * from "./controllers";
export interface User {
  name: string;
  password: string;
}

export interface AuthedContext extends DefaultContext {
  user?: User;
}

export interface ApiPagedData<T> {
  total: number;
  page: number;
  pageSize: number;
  data: T[];
}
export interface ApiResponse<T = Record<string, unknown>> {
  code: number;
  message: string;
  data?: T;
}

export interface ApiPagedResponse<T> extends ApiResponse<ApiPagedData<T>> {}

export interface ApiErrorResponse extends Omit<ApiResponse, "data"> {}

export interface ApiMiddleware<T = any>
  extends Middleware<DefaultState, DefaultContext, ApiResponse<T>> {}
