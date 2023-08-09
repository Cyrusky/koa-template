/*************************************************
 * Copyright (c) 2023.
 * Author: Cyrusky <bo.jin@borgor.cn>
 *************************************************/
import { esbuildDecorators } from "@anatine/esbuild-decorators";
import { build } from "esbuild";
import { aliasPath } from "esbuild-plugin-alias-path";
import path from "path";

import { Services } from "@/services";

const { LogService } = Services;

export const projectBuild = async (
  tsconfig: string,
  entryPoints: string[],
  outfile: string,
  startTime: number,
  cwd: string = process.cwd(),
) => {
  LogService.build.info("Build start ....");
  await build({
    platform: "node",
    target: "node12",
    bundle: true,
    sourcemap: false,
    minify: true,
    plugins: [
      esbuildDecorators({
        tsconfig,
        cwd,
      }),
      aliasPath({
        alias: { "@/*": path.resolve(__dirname, "../../src/") },
      }),
    ],
    tsconfig,
    entryPoints,
    outfile,
    external: [],
  });

  LogService.build.info(
    `Build success:  ${(performance.now() - startTime).toFixed(4)}ms`,
  );
};
