
import { IResponseGetManyProductsByID, IResponseProduct, IResponseProducts, IResponseTotalPage } from "app/models/product";

import request from "./agent";

const productApi = {
  getAllProduct :():Promise<IResponseProducts>=> request.get('products'),
  getProductById : (id:string): Promise<IResponseProduct> => request.get(`products/${id}`),
  getManyById: (ids : string[]) : Promise<IResponseGetManyProductsByID> => request.post("products/getmanybyid",{ids}),
  getProductFilter :(query: string) : Promise<IResponseProducts> => request.get(`products/filter${query}`),
  getTotalPage : () : Promise<IResponseTotalPage> => request.get('/products/totalpage')
};

export default productApi;