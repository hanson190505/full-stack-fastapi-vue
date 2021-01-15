import { defHttp } from "@/utils/http/axios";
import { IProduct } from "@/api/products/model/products";

enum Api {
  Product= '/product/'
}

export function getProductsAPI(): Promise<IProduct>{
  return defHttp.request(
    {
      url:Api.Product,
    }
  )
}