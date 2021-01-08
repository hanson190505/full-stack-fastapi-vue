import type { AxiosRequestConfig, Canceler } from 'axios';
import axios from 'axios';
import { is } from '@/utils/is';

let pendingMap = new Map<string, Canceler>();
export const getPendingUrl = (config: AxiosRequestConfig) => [config.method, config.url].join('&');

export class AxiosCanceler {
  /**
   * @description: 添加请求
   * @param {Object} config
   */
  addPending(config: AxiosRequestConfig) {
    this.removePending(config)
  }

  removePending(config: AxiosRequestConfig) {

  }
}