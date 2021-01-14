import { defHttp } from "@/utils/http/axios";

enum Api {
  Product= '/produc/'
}

export function getProductsAPI(){
  return defHttp.request(
    {
      url:Api.Product,
    }
  )
}