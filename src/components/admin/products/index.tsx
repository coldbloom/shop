import React from 'react';
import {useAppDispatch} from "@/store";
import {getProfile} from "@/store/features/auth/actionCreators";
import {IoIosAddCircleOutline} from "react-icons/io";
import ProductsTable from "@/components/admin/products/productsTable";
import NewProductModal from "@/components/admin/products/newProductModal";
import {IProductResponse} from "@/api/product/types";
import {ICategoryResponse} from "@/api/category/types";
import axios from "axios";
import Endpoints from "@/api/endpoints";

const Products = () => {
    const [products, setProducts] = React.useState<IProductResponse[]>([])
    const [categories, setCategories] = React.useState<ICategoryResponse[]>([])

    React.useEffect(() => {
        axios
            .get<IProductResponse[]>(Endpoints.PUBLIC.PRODUCT)
            .then(res => setProducts(res.data))
            .catch(err => console.log(err))
        axios
            .get<ICategoryResponse[]>(Endpoints.PUBLIC.CATEGORY)
            .then(res => setCategories(res.data))
    }, [])

    const [newProductModal, setNewProductModal] = React.useState(false)

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

            <NewProductModal
                open={newProductModal}
                close={() => setNewProductModal(false)}
                categories={categories}
            />

            <ProductsTable categories={categories} products={products}/>
        </div>
    );
};

export default Products;