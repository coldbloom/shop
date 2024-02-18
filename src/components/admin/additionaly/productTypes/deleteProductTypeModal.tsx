import React from 'react';
import Modal from "@/utils/components/modal";
import {ICategoryResponse} from "@/api/category/types";
import {axiosInstance} from "@/api/instance";
import Endpoints from "@/api/endpoints";
import DeleteModal from "@/utils/components/editionalModal/deleteModal";
import {IProductType} from "@/types/IProductType";

type TDeleteProductTypeModalProps = {
    id: number | null,
    close: () => void,
    setProductTypes: React.Dispatch<React.SetStateAction<IProductType[]>>
}
const DeleteProductTypeModal = ({id , close, setProductTypes}: TDeleteProductTypeModalProps) => {

    const delCategories = () => {
        axiosInstance
            .delete(`${Endpoints.PRODUCT_TYPE}/${id}`)
            .then(() => {
                setProductTypes(prev => prev.filter(item => item.id !== id))
                close()
            })
    }
    return (
        <Modal close={close}>
            <DeleteModal
                handleDelFetch={delCategories}
                close={close}
                title='Вы действительно желаете удалить данный тип товара?'
            />
        </Modal>
    );
};

export default DeleteProductTypeModal;