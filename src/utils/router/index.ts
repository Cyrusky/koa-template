/*************************************************
 * Copyright (c) 2023.
 * Author: Cyrusky <bo.jin@borgor.cn>
 *************************************************/
import { config } from "@/configs";
import { Services } from "@/services";

const { LogService } = Services;

const routerPrefix = config.router.prefix ?? "/";

enum Method {
  GET = "get",
  POST = "post",
  PUT = "put",
  DELETE = "delete",
  PATCH = "patch",
  OPTIONS = "options",
}

export const Controller = (path: string): ClassDecorator => {
  return (target) => {};
};

const createMappingDecorator = (method: string) => (path: string) => {
  return (
    target: object | ((...args: any[]) => any),
    key: string,
    ...args: any[]
  ) => {
    if (typeof target === "object") {
    } else {
      const fn = target[key];
    }
    console.log(target, key);
    // Reflect.defineMetadata(PATH_METAD；ATA, path, descriptor.value);
    // Reflect.defineMetadata(METHOD_METADATA, method, descriptor.value);
  };
};

export const Get = createMappingDecorator(Method.GET);
export const Post = createMappingDecorator(Method.POST);
