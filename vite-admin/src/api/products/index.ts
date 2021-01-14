import { defHttp } from "@/utils/http/axios";

enum Api {
  Product= '/product/'
}

export function getProducts(){
  return defHttp.request(
    {
      url:Api.Product,
    }
  )
}