import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AddCategory, UpdateCategory } from '../models/request/categories-request.model';
import { SingleResponseModel } from '../models/response/single-response.model';
import { AddSubcategory, GetSubCategoryNameList, UpdateSubcategory } from '../models/request/subcategories-request.model';
import { CategoryNameList } from '../models/response/subcategories-response.model';
import { CategoryResponse } from '../models/response/category-response.model';

@Injectable({
  providedIn: 'root'
})

export class GelsinService {
  constructor(private httpClient:HttpClient) { }
  //#region  Category
  addCategory(request: AddCategory){    
      return this.httpClient.post<SingleResponseModel<AddCategory>>(environment.apiUrl + '/Category/AddCategory',request);
  }
  updateCategory(request: UpdateCategory){    
    return this.httpClient.post<SingleResponseModel<UpdateCategory>>(environment.apiUrl + '/Category/UpdateCategory',request);
}
  getAllCategories(){    
    return this.httpClient.post<SingleResponseModel<CategoryResponse[]>>(environment.apiUrl + '/Category/GetAllCategories',{});
}
  getCategoryNameList(){    
    return this.httpClient.post<SingleResponseModel<CategoryNameList[]>>(environment.apiUrl + '/Category/GetCategoryNameList',{});
}
deleteCategory(id:number){    
  return this.httpClient.post<SingleResponseModel<CategoryResponse[]>>(environment.apiUrl + '/Category/DeleteCategory',{id:id});
}
  //#endregion
  //#region  Subategory
  addSubcategory(request: AddSubcategory){    
      return this.httpClient.post<SingleResponseModel<AddSubcategory>>(environment.apiUrl + '/SubCategory/AddSubCategory',request);
  }
  updateSubcategory(request: UpdateSubcategory){    
    return this.httpClient.post<SingleResponseModel<UpdateSubcategory>>(environment.apiUrl + '/SubCategory/UpdateSubCategory',request);
}
  getSubcategoryNameList(request:GetSubCategoryNameList){    
    return this.httpClient.post<SingleResponseModel<CategoryNameList[]>>(environment.apiUrl + '/SubCategory/GetSubCategoryNameList',request);
}
deleteSubategory(id:number){    
  return this.httpClient.post<SingleResponseModel<CategoryResponse[]>>(environment.apiUrl + '/SubCategory/DeleteSubCategory',{id:id});
}
  //#endregion
}