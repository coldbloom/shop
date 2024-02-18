import React from 'react';
import Modal from "@/utils/components/modal";
import EditModal from "@/utils/components/editionalModal/editModal";
import {axiosInstance} from "@/api/instance";
import Endpoints from "@/api/endpoints";
import {IBrand} from "@/types/IBrand";

type TEditBrandsModalProps = {
    close: () => void,
    id: number | null,
    name: string,
    setBrands: React.Dispatch<React.SetStateAction<IBrand[]>>
}

const EditBrandsModal = ({close, id, name, setBrands}: TEditBrandsModalProps) => {
    const [value, setValue] = React.useState(name)

    const editBrandNameFetch = () => {
        axiosInstance
            .put(`${Endpoints.BRAND}/${id}`, {'newName': value})
            .then(() => {
                setBrands(prev =>
                    prev.map(brand => {
                        if (brand.id === id) {
                            return {...brand, name: value}
                        }
                        return brand
                    }
                ));
                close();
            })
    }
    return (
        <Modal close={close}>
            <EditModal
                title='Изменить наименование бренда'
                close={close}
                name={name}
                value={value}
                setValue={setValue}
                handleEditFetch={editBrandNameFetch}
            />
        </Modal>
    );
};

export default EditBrandsModal;