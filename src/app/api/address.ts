import {
  IAddress,
  IRespondAddress,
  IRespondNewAddress,
} from "app/models/address";
import request from "./agent";

const addressApi = {
  getAddress: (): Promise<IRespondAddress> => request.get("addresses"),
  addNewAddress: (newAddress: IAddress): Promise<IRespondNewAddress> =>
    request.post("/addresses", newAddress),
  setDefault: (id: string) => request.put("/addresses/set/default", { id }),
  delete: (id: string) => request.del(`/addresses/${id}`),
};

export default addressApi;
