import React from 'react';

import Products from "@/components/admin/products";
import Categories from "@/components/admin/categories";
import Sidebar from "@/components/admin/home/sidebar";
import Header from "@/components/admin/home/header";
import ProductSizes from '../additionaly/productSizes'
import ProductBrands from '../additionaly/productBrands'
import ProductTypes from "../additionaly/productTypes";
import NewProduct from "@/components/admin/products/newProduct";
import Orders from "@/components/admin/orders";
export interface INavigation {
    id: number,
    name: string
}
// создать товар = 1
// все товарыы = 2

// типы = 3
// бренды = 4
// размеры = 5
// Категории = 6

// Заказы - 7


const AdminHome = () => {
    const [currentNav, setCurrentNav] = React.useState<number>(0)

    const setNav = (id: number) => {
        setCurrentNav(id)
    }

    return (
        <div className='w-full h-[100%] flex flex-row'>

            <Sidebar
                currentNav={currentNav}
                setNav={setNav}
            />

            <div className='flex flex-col w-[calc(100%-250px)] ml-[250px]'>
                <Header />

                <main>
                    {
                        {
                            1: <NewProduct />,
                            2: <Products />,

                            3: <ProductTypes />,
                            4: <ProductBrands />,
                            5: <ProductSizes />,
                            6: <Categories />,

                            7: <Orders />,
                        }[currentNav]
                    }
                </main>
            </div>
        </div>
    );
};

export default AdminHome;