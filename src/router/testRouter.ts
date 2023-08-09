/*************************************************
 * Copyright (c) 2023.
 * Author: Cyrusky <bo.jin@borgor.cn>
 *************************************************/

import Router from "koa-router";

import { TestController } from "@/controller/TestController";

const router = new Router({
  prefix: "/test",
});

router.get("/sign", TestController.getParamWeChatCode);
router.get("/verify", TestController.verifyJwtCodeIsCorrect);

export default router;
