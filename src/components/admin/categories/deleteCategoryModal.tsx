import React from 'react';
import Modal from "@/utils/components/modal";
import {ICategoryResponse} from "@/api/category/types";
import {axiosInstance} from "@/api/instance";
import Endpoints from "@/api/endpoints";
import DeleteModal from "@/utils/components/editionalModal/deleteModal";

type DeleteCategoryModalProps = {
    id: number | null,
    close: () => void,
    setCategories: React.Dispatch<React.SetStateAction<ICategoryResponse[]>>
}
const DeleteCategoryModal = ({id , close, setCategories}: DeleteCategoryModalProps) => {

    const delCategories = () => {
        axiosInstance
            .delete(`${Endpoints.PUBLIC.CATEGORY}/${id}`)
            .then(() => {
                setCategories(prev => prev.filter(item => item.id !== id))
                close()
            })
    }
    return (
        <Modal close={close}>
            <DeleteModal
                handleDelFetch={delCategories}
                close={close}
                title='Вы действительно желаете удалить данную категорию?'
            />
        </Modal>
    );
};

export default DeleteCategoryModal;