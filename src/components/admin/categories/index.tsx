import React from 'react';
import Endpoints from "@/api/endpoints";

import {ICategoryResponse} from "@/api/category/types";

import { IoIosAddCircleOutline } from "react-icons/io";
import NewCategoryModal from "@/components/admin/categories/newCategoryModal";
import CategoryTable from "@/components/admin/categories/categoryTable";
import axios from "axios";


const Categories = () => {
    const [openModal, setOpenModal] = React.useState<boolean>(false)
    const [categories, setCategories] = React.useState<ICategoryResponse[]>([])

    // const mutateCategories = (categories: ICategoryResponse[]) => {
    //     setCategories(categories)
    // }

    React.useEffect(() => {
        axios
            .get<ICategoryResponse[]>(Endpoints.PUBLIC.CATEGORY)
            .then(res => setCategories(res.data))
    }, [])

    const closeOpenModal = () => {
        setOpenModal(false)
    }

    React.useEffect(() => {
        console.log(categories)
    }, [categories])

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

            <NewCategoryModal
                open={openModal}
                close={closeOpenModal}
                categories={categories}
                setCategories={setCategories}
            />

            <CategoryTable
                categories={categories ? categories : []}
                setCategories={setCategories}
            />
        </div>
    );
};

export default Categories;