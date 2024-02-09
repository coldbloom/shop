import React from 'react';
import {IoIosAddCircleOutline} from "react-icons/io";
import NewCategoryModal from "@/components/admin/categories/newCategoryModal";
import CategoryTable from "@/components/admin/categories/categoryTable";
import {ICategoryResponse} from "@/api/category/types";

const Types = () => {
    const [openModal, setOpenModal] = React.useState<boolean>(false)
    const [brands, setBrands] = React.useState<ICategoryResponse[]>([])

    const closeOpenModal = () => {
        setOpenModal(false)
    }

    return (
        <div className='p-4 relative'>
            <div className='flex flex-row justify-between pb-4 pl-6'>
                <h1 className='text-2xl font-semibold'>Типы</h1>
                <IoIosAddCircleOutline
                    size={32}
                    className='cursor-pointer'
                    onClick={() => setOpenModal(true)}
                />
            </div>

            {/*<NewCategoryModal*/}
            {/*    open={openModal}*/}
            {/*    close={closeOpenModal}*/}
            {/*    brands={brands}*/}
            {/*    mutateCategories={mutateCategories}*/}
            {/*/>*/}

            {/*<CategoryTable*/}
            {/*    categories={categories ? categories : []}*/}
            {/*    mutateCategories={mutateCategories}*/}
            {/*/>*/}
        </div>
    );
};

export default Types;