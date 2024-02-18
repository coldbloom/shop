import React from 'react';
import {IoIosAddCircleOutline} from "react-icons/io";
import {IBrand} from "@/types/IBrand"
import NewBrandsModal from "@/components/admin/additionaly/productBrands/newBrandsModal";
import BrandsTable from "@/components/admin/additionaly/productBrands/brandsTable";
import axios from "axios";
import Endpoints from "@/api/endpoints";
import LoaderLayout from "@/utils/components/loader/loaderLayout";

const ProductBrands = () => {
    const [openNewBrandsModal, setOpenModal] = React.useState<boolean>(false)
    const [brands, setBrands] = React.useState<IBrand[] | []>([])

    React.useEffect(() => {
        axios
            .get<IBrand[]>(Endpoints.BRAND)
            .then(res => setBrands(res.data))
    }, [])

    const closeModal = () => setOpenModal(false)

    console.log(brands)
    return (
        <LoaderLayout loading={brands.length === 0}>
            <div className='p-4 relative'>
                <div className='flex flex-row justify-between pb-4 pl-6'>
                    <h1 className='text-2xl font-semibold'>Бренды</h1>
                    <IoIosAddCircleOutline
                        size={32}
                        className='cursor-pointer'
                        onClick={() => setOpenModal(true)}
                    />
                </div>

                {openNewBrandsModal &&
                    <NewBrandsModal
                        close={closeModal}
                        setBrands={setBrands}
                    />
                }

                <BrandsTable
                    brands={brands}
                    setBrands={setBrands}
                />
            </div>
        </LoaderLayout>
    );
};

export default ProductBrands;