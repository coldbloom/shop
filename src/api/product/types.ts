export interface IImage {
    order: number,
    path: string,
    id: number
    file?: File
    name?: string,
}
export interface IProductResponse {
    id: number,
    categoryId: number,
    name: string,
    price: number,
    about: string,
    images: IImage[]
}

export interface IProductPagination {
    currentPage: number,
    totalCount: number,
    totalPages: number,
    products: IProductResponse[]
}