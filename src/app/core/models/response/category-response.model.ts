import { SubcategoryResponse } from "./subcategories-response.model";

export interface CategoryResponse{
    id:number,
    name: string,
    description: string,
    image: string,
    isActive: boolean,
    rank: number,
    subcategory: SubcategoryResponse[] 
}