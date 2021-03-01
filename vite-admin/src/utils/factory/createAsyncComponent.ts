import { defineAsyncComponent } from "vue";
import Loading from "@/components/loading.vue";

interface IOptions {
  delay?: number;
  timeout?: number;
  retry?: boolean;
}

export function createAsyncComponent(loader: Fn, options: IOptions = {}) {
  const { delay = 100, timeout = 30000 } = options;
  return defineAsyncComponent({
    loader,
    timeout,
    delay,
    errorComponent: Loading,
    suspensible: false,
    /**
     *
     * @param {*} error 错误信息对象
     * @param {*} retry 一个函数，用于指示当 promise 加载器 reject 时，加载器是否应该重试
     * @param {*} fail  一个函数，指示加载程序结束退出
     * @param {*} attempts 允许的最大重试次数
     */
    onError(error, retry, fail, attempts) {
      if (error.message.match(/fetch/) && attempts <= 3) {
        // 请求发生错误时重试，最多可尝试 3 次
        retry();
      } else {
        // 注意，retry/fail 就像 promise 的 resolve/reject 一样：
        // 必须调用其中一个才能继续错误处理。
        fail();
      }
    },
  });
}
