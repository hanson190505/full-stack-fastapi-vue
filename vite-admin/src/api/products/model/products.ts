interface IBaseModel {
  create_time?: Date;
  update_time?: Date;
  is_delete?: boolean;
}

interface ICategory extends IBaseModel {
}

interface IProductColor {
  hash: string;
  web: string;
  panton: string
}

interface IProductStandard {
  unit: string;
  value: string | [number]
}

interface IProductDetail {
  uid: number
  color: IProductColor
  size: IProductStandard
  capacity: IProductStandard
  weight: IProductStandard
}

export interface IProduct extends IBaseModel {
  id: number
  name: string
  detail: IProductDetail
  category_id: number
  category?: ICategory
}