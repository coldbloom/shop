import React from 'react';
import Modal from "@/utils/components/modal";
import {axiosInstance} from "@/api/instance";
import Endpoints from "@/api/endpoints";
import DeleteModal from "@/utils/components/editionalModal/deleteModal";
import {IBrand} from "@/types/IBrand";

type TDeleteBrandsModalProps = {
    id: number | null,
    close: () => void,
    setBrands: React.Dispatch<React.SetStateAction<IBrand[]>>
}
const DeleteBrandsModal = ({id , close, setBrands}: TDeleteBrandsModalProps) => {

    const delCategories = () => {
        axiosInstance
            .delete(`${Endpoints.BRAND}/${id}`)
            .then(() => {
                setBrands(prev => prev.filter(item => item.id !== id))
                close()
            })
    }
    return (
        <Modal close={close}>
            <DeleteModal
                handleDelFetch={delCategories}
                close={close}
                title='Вы действительно желаете удалить данный бренд?'
            />
        </Modal>
    );
};

export default DeleteBrandsModal;