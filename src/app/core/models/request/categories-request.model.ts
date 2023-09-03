export interface AddCategory{
    name: string,
    description: string,
    image: string,
    isActive: boolean,
    rank: number 
}
export interface UpdateCategory{
    id: number,
    name: string,
    description: string,
    image: string,
    isActive: boolean,
    rank: number 
}
