export interface CategoryNameList{
    id: number,
    name: string,
    imageUrl: string
}
export interface SubcategoryResponse{
    id: number, 
    categoryId: number, 
    name: string, 
    description: string, 
    imageUrl:string, 
    rank:number, 
    isActive: boolean 
}