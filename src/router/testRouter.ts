/*
 * Copyright (c) 2022. .
 * Author: Cyrusky <bo.jin@borgor.cn>.
 */

import Router from "koa-router";

import { TestController } from "@/controller/TestController";

const router = new Router({
  prefix: "/user",
});

router.get("/mini-code", TestController.getParamWeChatCode);

export default router;
