/*
 * @Author: starail mawj2022@qq.com
 * @Date: 2024-05-13 22:05:28
 * @LastEditors: starail mawj2022@qq.com
 * @LastEditTime: 2024-05-13 22:05:54
 * @FilePath: /AutoLink-UI/web-ui/src/api/file-observe.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from "@/utils/request";

// 查询用户列表
export function fileObserveList(query) {
  return request({
    url: "/file-observe/list",
    method: "get",
    params: query,
  });
}

// 查询用户列表
export function fileObserveCreate(data) {
  return request({
    url: "/file-observe/create222",
    method: "post",
    data: data,
  });
}
