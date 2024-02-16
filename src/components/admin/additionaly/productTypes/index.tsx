import React from 'react';
import {IoIosAddCircleOutline} from "react-icons/io";
import NewCategoryModal from "@/components/admin/categories/newCategoryModal";
import CategoryTable from "@/components/admin/categories/categoryTable";
import {ICategoryResponse} from "@/api/category/types";

const ProductTypes = () => {
    const [openModal, setOpenModal] = React.useState<boolean>(false)
    const [types, setTypes] = React.useState<ICategoryResponse[]>([])

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
            {/*    productBrands={productBrands}*/}
            {/*    mutateCategories={mutateCategories}*/}
            {/*/>*/}

            {/*<CategoryTable*/}
            {/*    categories={categories ? categories : []}*/}
            {/*    mutateCategories={mutateCategories}*/}
            {/*/>*/}
        </div>
    );
};

export default ProductTypes;