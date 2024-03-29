import React from 'react';
import {MdOutlineDelete, MdOutlineModeEdit} from "react-icons/md";
import {IImage, IProductResponse} from "@/api/product/types";
import Image from "next/image";
import {ICategoryResponse} from "@/api/category/types";
import axios from "axios";
import Endpoints from "@/api/endpoints";
import DeleteProductModal from "@/components/admin/products/deleteProductModal";
import EditProductsModal from "@/components/admin/products/editProductsModal";

const findCategoryName = (categories: ICategoryResponse[], categoryId: number) => {
    const category = categories.find(item => item.id === categoryId);
    return category ? category.name : null;
};

function findTitleImage(images: IImage[]) {
    const titleImage = images.find(image => image.order === 1)
    return titleImage?.path
}

type ProductsTableType = {
    categories: ICategoryResponse[],
    products: IProductResponse[],
    setProducts: React.Dispatch<React.SetStateAction<IProductResponse[]>>,
    changeProduct: (array: IProductResponse[]) => void,
}

interface IDelProductModal {open: boolean, id: number | null}
interface IEditProductModal {open: boolean, product: IProductResponse | null}

const ProductsTable = ({categories, products, setProducts, changeProduct}: ProductsTableType) => {
    const [delProductModal, setDelProductModal] = React.useState<IDelProductModal>({ open: false, id: null })
    const [editProductModal, setEditProductModal] = React.useState<IEditProductModal>({ open: false, product: null })

    const openDelProduct = (productId: number) => {
        setDelProductModal({id: productId, open: true})
    }

    const closeDelProduct = () => {
        setDelProductModal({ ...delProductModal, open: false })
    }

    const openEditProduct = (product: IProductResponse) => {
        console.log(product, ' open edit modal')
        setEditProductModal({ product: product, open: true })
    }

    const closeEditProduct = () => {
        setEditProductModal({ product: null, open: false })
    }

    // React.useEffect(() => {
    //     console.log(products, ' from ProductsTable comp')
    // }, [products])

    return (
        <div className='w-full'>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="w-full text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr className='w-full'>
                    <th scope="col" className="px-6 py-3 text-center">
                        ID
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                        Изображения
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                        Наименование
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                        Категория
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
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
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
                            {product.id}
                        </th>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex justify-center">
                            {
                                product.images.length !== 0
                                ? <Image
                                        src={`http://localhost:3031/${findTitleImage(product.images)}`}
                                        alt="no image"
                                        width={100}
                                        height={100}
                                    />
                                : <p>Изображений нет</p>
                            }
                        </th>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
                            {product.name}
                        </th>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
                            {categories && findCategoryName(categories, product.categoryId)}
                        </th>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
                            {product.price}
                        </th>
                        <th className="px-6 py-4">
                            <div className='flex flex-row'>
                                <MdOutlineModeEdit
                                    size={22}
                                    className='cursor-pointer mr-6 hover:text-black'
                                    onClick={() => openEditProduct(product)}
                                />
                                <MdOutlineDelete
                                    size={22}
                                    className='cursor-pointer hover:text-black'
                                    onClick={() => openDelProduct(product.id)}
                                />
                            </div>
                        </th>
                    </tr>
                ))}
                </tbody>
            </table>

            <DeleteProductModal
                id={delProductModal.id}
                isOpen={delProductModal.open}
                close={closeDelProduct}
                products={products}
                changeProduct={changeProduct}
            />

            {
                editProductModal.product !== null &&
                <EditProductsModal
                    isOpen={editProductModal.open}
                    close={closeEditProduct}
                    products={products}
                    product={editProductModal.product}
                    setProducts={setProducts}
                    categories={categories}
                />
            }
        </div>
    );
};

export default ProductsTable;