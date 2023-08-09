/*************************************************
 * Copyright (c) 2023.
 * Author: Cyrusky <bo.jin@borgor.cn>
 *************************************************/
export const ResponseInfo = {
  success: { code: 200, message: "成功!" }, // 正常返回
  badRequest: { code: 400, message: "错误请求!" }, // 表示其他错误，就是4xx都无法描述的错误
  parameterError: { code: 401, message: "参数错误!" }, // 参数错误
  dataError: { code: 402, message: "数据错误!" }, // 参数没有错误，但是数据内容不允许
  tokenError: { code: 403, message: "token错误或者过期!" },
  internalServerError: { code: 500, message: "系统内部错误!" }, // 表示其他错误，就是5xx都无法描述的错误
  notFound: { code: 404, message: "资源未找到" },
};
