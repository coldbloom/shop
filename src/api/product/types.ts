export interface IImage {
    order: number,
    path: string,
    id: number
}
export interface IProductResponse {
    id: number,
    categoryId: number,
    name: string,
    price: number,
    about: string,
    images: IImage[]
}