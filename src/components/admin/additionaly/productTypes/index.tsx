import React from 'react';
import {IoIosAddCircleOutline} from "react-icons/io";
import LoaderLayout from "@/utils/components/loader/loaderLayout";
import axios from "axios";
import Endpoints from "@/api/endpoints";
import NewProductTypeModal from "@/components/admin/additionaly/productTypes/newProductTypeModal";
import {IProductType} from "@/types/IProductType";
import ProductTypeTable from "@/components/admin/additionaly/productTypes/productTypeTable";

const ProductTypes = () => {
    const [openNewProductTypeModal, setOpenModal] = React.useState<boolean>(false)
    const [productTypes, setProductTypes] = React.useState<IProductType[] | []>([])

    React.useEffect(() => {
        axios
            .get(Endpoints.PRODUCT_TYPE)
            .then(res => setProductTypes(res.data))
    }, [])
    const closeModal = () => setOpenModal(false)

    return (
        <LoaderLayout loading={productTypes.length === 0}>
            <div className='p-4 relative'>
                <div className='flex flex-row justify-between pb-4 pl-6'>
                    <h1 className='text-2xl font-semibold'>Типы</h1>
                    <IoIosAddCircleOutline
                        size={32}
                        className='cursor-pointer'
                        onClick={() => setOpenModal(true)}
                    />
                </div>

                {openNewProductTypeModal &&
                    <NewProductTypeModal
                        close={closeModal}
                        setProductTypes={setProductTypes}
                    />
                }

                <ProductTypeTable
                    productTypes={productTypes}
                    setProductTypes={setProductTypes}
                />
            </div>
        </LoaderLayout>
    );
};

export default ProductTypes;