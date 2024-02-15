import React from 'react';
import {IoIosAddCircleOutline} from "react-icons/io";
import {IBrands} from "@/types/IBrands"
import NewBrandsModal from "@/components/admin/additionaly/productBrands/newBrandsModal";

const ProductBrands = () => {
    const [openModal, setOpenModal] = React.useState<boolean>(false)
    const [brands, setBrands] = React.useState<IBrands[] | []>([])

    const closeOpenModal = () => {
        setOpenModal(false)
    }

    return (
        <div className='p-4 relative'>
            <div className='flex flex-row justify-between pb-4 pl-6'>
                <h1 className='text-2xl font-semibold'>Бренды</h1>
                <IoIosAddCircleOutline
                    size={32}
                    className='cursor-pointer'
                    onClick={() => setOpenModal(true)}
                />
            </div>

            <NewBrandsModal
                open={openModal}
                close={closeOpenModal}
                brands={brands}
                setBrands={setBrands}
            />

            {/*<CategoryTable*/}
            {/*    categories={categories ? categories : []}*/}
            {/*    mutateCategories={mutateCategories}*/}
            {/*/>*/}
        </div>
    );
};

export default ProductBrands;