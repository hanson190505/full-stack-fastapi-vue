// import type {AxiosRequestConfig, AxiosResponse} from 'axios'
import { AxiosRequestConfig, AxiosResponse } from "axios";
import { IRequestOptions, IResult } from "@/utils/http/axios/types";

export abstract class AxiosTransform {
  beforeRequestHook?: (config: AxiosRequestConfig, options: IRequestOptions) => AxiosRequestConfig;
  transformRequestData?: (res: AxiosResponse<IResult>, options: IRequestOptions) => any;
  requestCatch?: () => void;
  requestInterceptors?: () => void;
  responseInterceptors?: () => void;
  requestInterceptorsCatch?: () => void;
  responseInterceptorsCatch?: () => void;
}