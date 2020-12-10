interface IColor {
  indexColor: string;
  nameColor: string;
  plusCost: number;
}
interface IPhoto {
  photo: string;
}
interface IImage {
  _id: string;
  photo: string;
}
interface IPhotoImage {
  image: IImage;
}
export interface IColorPhoto {
  color: IColor;
  image: IPhoto;
}
export interface ICapacity {
  capacity: number;
  plusCost: number;
}

export interface IProduct {
  _id: string;
  name: string;
  priceOnSales: number;
  priceOnPurchase: number;
  description: string;
  installment: Boolean;
  oldPrice: number;
  bonusTitle?: string;
  bonusContent?: string;
  isExists: Boolean;
  screen: string;
  operatingSystem: string;
  frontCamera: string;
  backCamera: string;
  CPU: string;
  RAM?: string;
  internalMemory: string;
  batteryCapacity?: string;
  SIM: string;
  colors: IPhotoImage[];
}

export interface IProductDetail {
  _id: string;
  name: string;
  priceOnSales: number;
  priceOnPurchase: number;
  description: string;
  installment: Boolean;
  oldPrice: number;
  bonusTitle?: string;
  bonusContent?: string;
  isExists: Boolean;
  screen: string;
  operatingSystem: string;
  frontCamera: string;
  backCamera: string;
  CPU: string;
  RAM?: string;
  internalMemory: string;
  batteryCapacity?: string;
  SIM: string;
  colors: IColorPhoto[];
  capacities: ICapacity[];
}

export interface IResponseProducts {
  success: boolean;
  products: IProductDetail[];
}

export interface IResponseProduct {
  success: boolean;
  product: IProductDetail;
}
export interface IResponseGetManyProductsByID {
  success: boolean;
  data: IProduct[];
}

export interface IResponseTotalPage {
  totalPage: number;
}
