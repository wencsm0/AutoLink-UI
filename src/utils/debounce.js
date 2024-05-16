export default class Debounce {
  constructor(delay) {
    this.delay = delay ? delay : 500;

    this.timeOut = null;
  }

  debounceEnd() {
    return new Promise((resolve, reject) => {
      if (this.timeout) {
        clearTimeout(this.timeout);
      }

      this.timeout = setTimeout(() => {
        resolve("success");
      }, this.delay);
    });
  }
}

export const sleep = (ms = delay()) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const delay = () => 2000;
