import React from 'react';

import Products from "@/components/admin/products";
import Categories from "@/components/admin/categories";
import Sidebar from "@/components/admin/home/sidebar";
import Header from "@/components/admin/home/header";
import Index from "@/components/admin/products/newProduct";
import NewCategory from "@/components/admin/categories/newCategory";

export interface INavigation {
    id: number,
    name: string
}
// создать товар = 1
// все товарыы = 2
// создать категорию = 3
// все категории = 4


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
                            1: <Index />,
                            2: <Products />,
                            3: <NewCategory />,
                            4: <Categories />,
                        }[currentNav]
                    }
                </main>
            </div>
        </div>
    );
};

export default AdminHome;