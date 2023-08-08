import fs from "fs";
import path from "path";

import { Services } from "@/services";

const { LogService } = Services;
export const copyPrismaFiles = (
  databaseEnginePath: string,
  distPath: string,
  startTime: number,
) => {
  LogService.build.info("Start to moving prisma engines ....");
  const paths = fs.readdirSync(databaseEnginePath);
  paths.forEach((p) => {
    if (p.endsWith(".node") || p.endsWith(".prisma")) {
      LogService.build.info(`Moving ${p} ....`);
      fs.copyFileSync(path.join(databaseEnginePath, p), path.join(distPath, p));
    }
  });
  LogService.build.info(
    `Moving prisma engines success: ${(performance.now() - startTime).toFixed(
      4,
    )}ms`,
  );
};
