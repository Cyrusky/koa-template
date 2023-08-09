/*************************************************
 * Copyright (c) 2023.
 * Author: Cyrusky <bo.jin@borgor.cn>
 *************************************************/
import { Command } from "commander";

interface ArgsType {
  run: boolean;
  env: boolean;
}

export const getArgs = () => {
  const program = new Command();
  program
    .version("0.0.1")
    .option("-r, --run", "Run the server")
    .option("-e, --env", "Set the environment")
    .parse(process.argv);

  return program.opts<ArgsType>();
};
