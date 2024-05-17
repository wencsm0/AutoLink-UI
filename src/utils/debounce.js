import request from "@/utils/request";

export class Debounce {
  constructor(delay) {
    this.delay = delay ? delay : 500;
    this.timeOut = null;
  }

  debounceEnd() {
    return new Promise((resolve, reject) => {
      if (this.timeout) {
        clearTimeout(this.timeout);
        console.log("重复提交")
      }

      this.timeout = setTimeout(() => {
        resolve("success");
      }, this.delay);
    });
  }
}

export const delay = () => 2000;
export const sleep = (ms = delay()) =>
  new Promise((resolve) => setTimeout(resolve, ms));

/**
 * 防抖
 */
export async function debounce(config, debounce) {
  await debounce.debounceEnd();
  return request(config);
}
