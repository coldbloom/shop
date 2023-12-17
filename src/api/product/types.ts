interface IImage {
    id: number,
    path: string,
}
export interface IProductResponse {
    id: number,
    categoryId: number,
    name: string,
    price: number,
    images: IImage[]
}