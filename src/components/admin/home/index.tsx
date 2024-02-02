import React from 'react';

import Products from "@/components/admin/products";
import Categories from "@/components/admin/categories";
import Sidebar from "@/components/admin/home/sidebar";
import Header from "@/components/admin/home/header";

export interface INavigation {
    id: number,
    name: string
}

const navigation: INavigation[] = [
    {
        id: 0,
        name: 'Товары',
    },
    {
        id: 1,
        name: 'Категории',
    }
]
const AdminHome = () => {
    const [currentNav, setCurrentNav] = React.useState<number>(0)

    const setNav = (id: number) => {
        setCurrentNav(id)
    }

    return (
        <div className='w-full h-[100%] flex flex-row'>

            <Sidebar
                navigation={navigation}
                currentNav={currentNav}
                setNav={setNav}
            />

            <div className='flex flex-col w-[calc(100%-250px)]'>
                <Header />

                <main>
                    {
                        currentNav === 0
                            ? <Products />
                            : <Categories />
                    }
                </main>
            </div>
        </div>
    );
};

export default AdminHome;