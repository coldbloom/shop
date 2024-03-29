import React from 'react';
import Modal from "@/utils/components/modal";
import {ICategoryResponse} from "@/api/category/types";
import {axiosInstance} from "@/api/instance";
import Endpoints from "@/api/endpoints";
import EditModal from "@/utils/components/editionalModal/editModal";


type EditCategoryModal = {
    close: () => void,
    id: number | null,
    name: string,
    setCategories: React.Dispatch<React.SetStateAction<ICategoryResponse[]>>
}

const EditCategoryModal = ({close, id, name, setCategories}: EditCategoryModal) => {
    const [value, setValue] = React.useState(name)

    const editCategoryName = () => {
        axiosInstance
            .put(`${Endpoints.PUBLIC.CATEGORY}/${id}`, {'newName': value})
            .then(() => {
                setCategories(prev => prev.map(category => {
                    if (category.id === id) {
                        return {...category, name: value}
                    }
                    return {...category}
                }));
                close();
            })
    }

    return (
        <Modal close={close}>
            <EditModal
                title='Изменить наименование категории'
                close={close}
                name={name}
                value={value}
                setValue={setValue}
                handleEditFetch={editCategoryName}
            />
        </Modal>
    );
};

export default EditCategoryModal;