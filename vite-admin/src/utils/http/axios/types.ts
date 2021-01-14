import type { AxiosRequestConfig } from "axios";
import { AxiosTransform } from "@/utils/http/axios/axiosTransform";

export type ErrorMessageMode = 'none' | 'modal' | 'message' | undefined;

export interface IRequestOptions {
  /**
   * @description: 自定义请求设置
   */
  // 请求参数拼接到url
  joinParamsToUrl?: boolean;
  // 格式化请求参数时间
  formatDate?: boolean;
  //  是否处理请求结果
  isTransformRequestResult?: boolean;
  // 是否加入url
  joinPrefix?: boolean;
  // 接口地址， 不填则使用默认apiUrl
  apiUrl?: string;
  // 错误消息提示类型
  errorMessageMode?: ErrorMessageMode;
  // 是否加入时间戳
  joinTime?: boolean;
}

export interface ICreateAxiosOptions extends AxiosRequestConfig {
  prefixUrl?: string
  transform?: AxiosTransform
  requestOptions?: IRequestOptions
}

export interface IResult<T = any> {
  status: number;
  type: 'success' | 'error' | 'warning';
  statusText: string;
  data: T;
}