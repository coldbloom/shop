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
    categories: ICategoryResponse[],
    setCategories: React.Dispatch<React.SetStateAction<ICategoryResponse[]>>
}

const mutation = (array: ICategoryResponse[], id: number | null, newName: string) => {
    return array.map(category => {
        if (category.id === id) {
            return {...category, name: newName}
        }

        return category
    })
}

const EditCategoryModal = ({close, id, name, categories, setCategories}: EditCategoryModal) => {
    const [value, setValue] = React.useState(name)

    const editCategoryName = () => {
        axiosInstance
            .put(`${Endpoints.PUBLIC.CATEGORY}/${id}`, {'newName': value})
            .then((res) => {
                const updatedCategories = mutation(categories, id, value)
                setCategories(updatedCategories)
                setValue('')
                close()
            })
    }

    return (
        <Modal close={close}>
            <EditModal
                title='Изменить наименование категории'
                name={name}
                value={value}
                setValue={setValue}
                handleEditFetch={editCategoryName}
            />
        </Modal>
    );
};

export default EditCategoryModal;