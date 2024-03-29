import React from 'react';
import {IoIosAddCircleOutline} from "react-icons/io";
import ProductsTable from "@/components/admin/products/productsTable";
import NewProductModal from "@/components/admin/products/newProductModal";
import {IProductPagination, IProductResponse} from "@/api/product/types";
import {ICategoryResponse} from "@/api/category/types";
import axios from "axios";
import Endpoints from "@/api/endpoints";

const Products = () => {
    const [products, setProducts] = React.useState<IProductResponse[]>([])
    const [categories, setCategories] = React.useState<ICategoryResponse[]>([])

    React.useEffect(() => {
        axios
            .get<IProductPagination>(Endpoints.PUBLIC.PRODUCT)
            .then(res => setProducts(res.data.products))
            .catch(err => console.log(err))
        axios
            .get<ICategoryResponse[]>(Endpoints.PUBLIC.CATEGORY)
            .then(res => setCategories(res.data))
    }, [])

    const [newProductModal, setNewProductModal] = React.useState(false)

    const changeProduct = (newProducts: IProductResponse[]) => setProducts(newProducts)

    const addNewProduct = (newProducts: IProductResponse) => setProducts(prevState => {
        console.log(newProducts, ' что здесь лежит')
        return [...prevState, newProducts]
    })


    return (
        <div className='p-4'>
            <div className='flex flex-row justify-between pb-4 pl-6'>
                <h1 className='text-2xl font-semibold'>Товары</h1>
                <IoIosAddCircleOutline
                    size={32}
                    className='cursor-pointer'
                    onClick={() => setNewProductModal(true)}
                />
            </div>

            {newProductModal && ( // В этом случае, когда вы вызываете функцию close и устанавливаете состояние newProductModal в false, компонент NewProductModal будет полностью удален из дерева DOM
                <NewProductModal
                    open={newProductModal}
                    close={() => setNewProductModal(false)}
                    categories={categories}
                    addNewProductChange={addNewProduct}
                />
            )}

            <ProductsTable
                categories={categories}
                products={products}
                setProducts={setProducts}
                changeProduct={changeProduct}
            />
        </div>
    );
};

export default Products;