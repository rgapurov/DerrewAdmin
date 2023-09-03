export interface AddSubcategory{
    name: string,
    categoryId: number,
    description: string,
    image: string,
    isActive: boolean,
    rank: number 
}
export interface UpdateSubcategory{
    id:number,
    name: string,
    categoryId: number,
    description: string,
    image: string,
    isActive: boolean,
    rank: number 
}
export interface GetSubCategoryNameList{
    categoryId:number
}