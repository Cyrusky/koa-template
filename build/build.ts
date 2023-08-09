/*************************************************
 * Copyright (c) 2023.
 * Author: Cyrusky <bo.jin@borgor.cn>
 *************************************************/
import "reflect-metadata";
import "@/services/register";
import "@/utils/logger/loggerConfig";

import path from "path";

import { Services } from "@/services";

import { projectBuild } from "./buildUtils/buildTs";
import { clearPath } from "./buildUtils/clearPath";
import { generateEnvFile } from "./buildUtils/generateEnvFile";
import { copyPrismaFiles } from "./buildUtils/movingFiles";

const { LogService } = Services;

const mainBuilder = async () => {
  const tsconfig = path.resolve(__dirname, "../tsconfig.json");
  const entryPoints = [path.resolve(__dirname, "../src/index.ts")];
  const distPath = path.resolve(__dirname, "../bin");
  const outfile = path.resolve(distPath, "index.js");
  const databaseEnginePath = path.resolve(__dirname, "../src/database/client");
  const startTime = performance.now();

  clearPath(distPath);

  await projectBuild(tsconfig, entryPoints, outfile, startTime);

  copyPrismaFiles(databaseEnginePath, distPath, startTime);

  generateEnvFile();
};

/**
 * Start to run the build pipeline.
 */
mainBuilder().catch((err) => {
  LogService.build.error("Build failed", err);
});
