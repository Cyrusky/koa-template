/*************************************************
 * Copyright (c) 2023.
 * Author: Cyrusky <bo.jin@borgor.cn>
 *************************************************/
import { type Middleware } from "koa";
import { type HttpMethodEnum } from "koa-body";
import { Service } from "typedi";

import { ServicesNames } from "@/constants/services";

interface SubRouter {
  className: string;
  method: HttpMethodEnum;
  path: string;
  fn: Middleware;
}

@Service(ServicesNames.RouterService)
export class RouterService {
  private readonly _routers: Record<string, SubRouter[]> = {};

  public addRootRouter(className: string) {
    this._routers[className] = [];
  }

  public addSubRouter(
    className: string,
    path: string,
    fn: Middleware,
    method: HttpMethodEnum,
  ) {
    this._routers[className].push({
      className,
      method,
      path,
      fn,
    });
  }
}
