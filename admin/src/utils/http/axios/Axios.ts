import type { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios';
import axios from 'axios';
import { isFunction } from '@/utils/is';
import type { IRequestOptions, ICreateAxiosOptions, IResult, IUploadFileParams } from './types';

/**
 * @description: axios模块
 */
export class VAxios {
  private axiosInstance: AxiosInstance;
  private readonly options: ICreateAxiosOptions;

  constructor(options: ICreateAxiosOptions) {
    this.options = options;
    this.axiosInstance = axios.create(options);
    // 拦截器设置
    // this.setupInterceptors()
  }
  /**
   * @description: 创建axios实例
   */
  private createAxios(config: ICreateAxiosOptions): void {
    this.axiosInstance = axios.create(config);
  }
  private getTransform() {
    const { transform } = this.options;
    return transform;
  }
  getAxios(): AxiosInstance {
    return this.axiosInstance;
  }
  /**
   * @description: 重新设置axios
   */
  configAxios(config: ICreateAxiosOptions): void {
    if (!this.axiosInstance) {
      return;
    }
    this.configAxios(config);
  }
  /**
   * @description: 设置通用header
   */
  setHeader(header: any): void {
    if (!this.axiosInstance) {
      return;
    }
    Object.assign(this.axiosInstance.defaults.headers, header);
  }

  /**
   * @description: 拦截器配置
   */
  private setupInterceptors() {
    const transform = this.getTransform();
    if (!transform) {
      return;
    }
    const {
      requestInterceptors,
      responseInterceptor,
      requestInterceptorsCatch,
      responseInterceptorsCatch
    } = transform;
  }
  /**
   * @description: 请求方法
   */
  request<T = any>(config: AxiosRequestConfig, options?: IRequestOptions): Promise<T> {
    // vue-vben-admin的写法,需要用到lodsh包,为什么要这样写??
    // let conf: AxiosRequestConfig = cloneDeep(config)
    let conf: AxiosRequestConfig = config;
    const { requestOptions } = this.options;
    const opt: IRequestOptions = Object.assign({}, requestOptions, options);
    return new Promise((resolve, reject) => {
      this.axiosInstance
        .request<any, AxiosResponse<IResult>>(conf)
        .then((res: AxiosResponse<IResult>) => {
          resolve((res as unknown) as Promise<T>);
        })
        .catch((e: Error) => {
          reject(e);
        });
    });
  }
}
