import React from 'react';
import {MdOutlineDelete, MdOutlineModeEdit} from "react-icons/md";
import {IProductResponse} from "@/api/product/types";
import Image from "next/image";
import {ICategoryResponse} from "@/api/category/types";
import axios from "axios";
import Endpoints from "@/api/endpoints";

const findCategoryName = (categories: ICategoryResponse[], categoryId: number) => {
    const category = categories.find(item => item.id === categoryId);
    return category ? category.name : null;
};

type ProductsTableType = {
    categories: ICategoryResponse[],
    products: IProductResponse[],
    changeProduct: (array: IProductResponse[]) => void,
}

const ProductsTable = ({categories, products, changeProduct}: ProductsTableType) => {

    const deleteProduct = (productId: number) => {
        axios
            .delete(`${Endpoints.PUBLIC.PRODUCT}/${productId}`)
            .then(() => {
                const newProducts = products.filter((product) => product.id !== productId)
                changeProduct(newProducts)
            })
            .catch(() => console.log('Ошибка при удалении!'));
    }
    
    console.log(products)
    
    return (
        <div className='w-full'>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="w-full text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr className='w-full'>
                    <th scope="col" className="px-6 py-3">
                        ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Изображения
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Наименование
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Категория
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Цена
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Действия
                    </th>
                </tr>
                </thead>
                <tbody>
                {products && products.map((product) => (
                    <tr key={product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {product.id}
                        </th>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {
                                product.images.length !== 0
                                ? <Image
                                        src={`http://localhost:3031/${product.images[0].path}`}
                                        alt="no image"
                                        width={100}
                                        height={100}
                                    />
                                : <p>Изображений нет</p>
                            }
                        </th>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {product.name}
                        </th>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {categories && findCategoryName(categories, product.categoryId)}
                        </th>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {product.price}
                        </th>
                        <th className="px-6 py-4">
                            <div className='flex flex-row'>
                                <MdOutlineModeEdit
                                    size={22}
                                    className='cursor-pointer mr-6 hover:text-black'
                                    onClick={() => {}}
                                />
                                <MdOutlineDelete
                                    size={22}
                                    className='cursor-pointer hover:text-black'
                                    onClick={() => deleteProduct(product.id)}
                                />
                            </div>
                        </th>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductsTable;