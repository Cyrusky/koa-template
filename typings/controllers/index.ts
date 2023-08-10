/*************************************************
 * Copyright (c) 2023.
 * Author: Cyrusky <bo.jin@borgor.cn>
 *************************************************/
import type Router from "koa-router";

export class ControllerContainer {
  static router?: Router;
  static prefix?: string;
  static sub_router?: Array<{ path: string; method: string }>;
}

export type ControllerConstructor<
  T extends ControllerContainer = ControllerContainer,
> = new (...args: any[]) => T;
