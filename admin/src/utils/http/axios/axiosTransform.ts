import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import type { IRequestOptions, IResult } from './types';

export abstract class AxiosTransform {
  /**
   * @description: 请求之前处理配置
   */
  beforeRequestHook?: (config: AxiosRequestConfig, options: IRequestOptions) => AxiosRequestConfig;
  /**
   * @description: 请求成功处理
   */
  transformRequestData?: (res: AxiosResponse<IResult>, options: IRequestOptions) => any;
  /**
   * @description: 请求失败处理
   */
  requestCatch?: (e: Error) => Promise<any>;
  /**
   * @description: 请求之前的拦截器
   */
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  /**
   * @description: 请求之后的拦截器
   */
  responseInterceptor?: (res: AxiosResponse<any>) => AxiosResponse<any>;
  /**
   * @description: 请求之前的拦截器错误处理
   */
  requestInterceptorsCatch?: (error: Error) => void;
  /**
   * @description: 请求之后的拦截器错误处理
   */
  responseInterceptorsCatch?: (error: Error) => void;
}
