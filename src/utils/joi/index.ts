/*************************************************
 * Copyright (c) 2023.
 * Author: Cyrusky <bo.jin@borgor.cn>
 *************************************************/
export class JoiUtils {
  public static validator = <T extends Record<string, any>>(
    propertyKey: T,
    descriptor: keyof T,
    ...args: any[]
  ) => {
    console.log("g(): called");
  };
}
