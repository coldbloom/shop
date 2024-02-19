import React from 'react';
import {IoIosAddCircleOutline} from "react-icons/io";
import LoaderLayout from "@/utils/components/loader/loaderLayout";
import NewSizeModal from "@/components/admin/additionaly/productSizes/newSizeModal";
import {ISize} from "@/types/ISize";
import ProductSizeTables from "@/components/admin/additionaly/productSizes/productSizeTables";
import axios from "axios";
import Endpoints from "@/api/endpoints";

const ProductSizes = () => {
    const [openNewSizeModal, setOpenModal] = React.useState<boolean>(false)
    const [sizes, setSizes] = React.useState<ISize[]>([])

    const closeOpenModal = () => {
        setOpenModal(false)
    }

    React.useEffect(() => {
        axios
            .get(Endpoints.SIZE)
            .then(res => setSizes(res.data))
    }, [])

    React.useEffect(() => {
        console.log(sizes)
    }, [sizes])

    return (
        <LoaderLayout loading={sizes.length === 0}>
            <div className='p-4 relative'>
                <div className='flex flex-row justify-between pb-4 pl-6'>
                    <h1 className='text-2xl font-semibold'>Размеры</h1>
                    <IoIosAddCircleOutline
                        size={32}
                        className='cursor-pointer'
                        onClick={() => setOpenModal(true)}
                    />
                </div>

                {openNewSizeModal &&
                    <NewSizeModal
                        close={closeOpenModal}
                        setSizes={setSizes}
                    />
                }

                <ProductSizeTables
                    sizes={sizes}
                />
            </div>
        </LoaderLayout>
    );
};

export default ProductSizes;