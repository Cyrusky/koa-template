/*************************************************
 * Copyright (c) 2023.
 * Author: Cyrusky <bo.jin@borgor.cn>
 *************************************************/
import fs from "fs";

import { Services } from "@/services";

const { LogService } = Services;
export const clearPath = (distPath: string) => {
  LogService.build.info("Clear the dist path ....");
  fs.rmSync(distPath, { recursive: true, force: true });
};
