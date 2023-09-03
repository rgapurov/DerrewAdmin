import { ResponseModel } from "./response.model";

export interface SingleResponseModel<T> extends ResponseModel{
  data : T;
  status: number;
  message: string;
}
