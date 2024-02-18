import React from 'react';
import Modal from "@/utils/components/modal";
import {axiosInstance} from "@/api/instance";
import Endpoints from "@/api/endpoints";
import EditModal from "@/utils/components/editionalModal/editModal";
import {IProductType} from "@/types/IProductType";


type TEditProductTypeModalProps = {
    id: number | null,
    close: () => void,
    name: string,
    setProductTypes: React.Dispatch<React.SetStateAction<IProductType[]>>
}

const EditProductTypeModal = ({id, close, name, setProductTypes}: TEditProductTypeModalProps) => {
    const [value, setValue] = React.useState(name)

    const editCategoryName = () => {
        axiosInstance
            .put(`${Endpoints.PUBLIC.CATEGORY}/${id}`, {'newName': value})
            .then((res) => {
                setProductTypes(prev => prev.map(type => {
                    if (type.id === id) {
                        return { ...type, name: value}
                    }
                    return {...type}
                }));
                close();
            })
    }

    return (
        <Modal close={close}>
            <EditModal
                title='Изменить наименование типа товара'
                close={close}
                name={name}
                value={value}
                setValue={setValue}
                handleEditFetch={editCategoryName}
            />
        </Modal>
    );
};

export default EditProductTypeModal;