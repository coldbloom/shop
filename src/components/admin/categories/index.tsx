import React from 'react';
import Endpoints from "@/api/endpoints";

import {ICategoryResponse} from "@/api/category/types";

import { IoIosAddCircleOutline } from "react-icons/io";
import NewCategoryModal from "@/components/admin/categories/newCategoryModal";
import CategoryTable from "@/components/admin/categories/categoryTable";
import axios from "axios";


const Categories = () => {
    const [openNewCategoriesModal, setOpenModal] = React.useState<boolean>(false)
    const [categories, setCategories] = React.useState<ICategoryResponse[]>([])

    React.useEffect(() => {
        axios
            .get<ICategoryResponse[]>(Endpoints.PUBLIC.CATEGORY)
            .then(res => setCategories(res.data))
    }, [])

    const closeOpenModal = () => setOpenModal(false)

    return (
        <div className='p-4 relative'>
            <div className='flex flex-row justify-between pb-4 pl-6'>
                <h1 className='text-2xl font-semibold'>Категории</h1>
                <IoIosAddCircleOutline
                    size={32}
                    className='cursor-pointer'
                    onClick={() => setOpenModal(true)}
                />
            </div>

            { openNewCategoriesModal &&
                <NewCategoryModal
                    close={closeOpenModal}
                    setCategories={setCategories}
                />
            }

            <CategoryTable
                categories={categories ? categories : []}
                setCategories={setCategories}
            />
        </div>
    );
};

export default Categories;