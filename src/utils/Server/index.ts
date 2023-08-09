/*************************************************
 * Copyright (c) 2023.
 * Author: Cyrusky <bo.jin@borgor.cn>
 *************************************************/
import { createServer } from "http";

import app from "@/app";
import { config } from "@/configs";
import { onError, onListening } from "@/utils/Server/listeners";

export * from "./commands";
export * from "./listeners";

export const runServer = () => {
  const port = Number.isNaN(Number(config.server.port))
    ? 3000
    : Number(config.server.port);
  const bind = config.server.bind ?? "127.0.0.1";

  const server = createServer(app.callback);
  server
    .listen(port, bind, 1, () => {})
    .on("error", onError(bind, port))
    .on("listening", onListening(server));
};
