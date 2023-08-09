/*************************************************
 * Copyright (c) 2023.
 * Author: Cyrusky <bo.jin@borgor.cn>
 *************************************************/
import { Services } from "@/services";

const { LogService } = Services;

export const generateEnvFile = () => {
  /**
   * Generate Env files
   */
  LogService.build.info("Start to generate env files ....");
};
