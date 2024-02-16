import React from 'react';
import {IBrand} from "@/types/IBrand";
import Modal from "@/utils/components/modal";
import {axiosInstance} from "@/api/instance";
import Endpoints from "@/api/endpoints";
import NewModal from "@/utils/components/editionalModal/newModal";

type NewBrandModalProps = {
    close: () => void,
    setBrands: React.Dispatch<React.SetStateAction<IBrand[]>>
};

const NewBrandModal = ({close, setBrands}: NewBrandModalProps) => {
    const [name, setName] = React.useState('')

    const addNewBrandFetch = () => {
        axiosInstance
            .post(Endpoints.BRAND, {'name': name})
            .then((res) => {
                setBrands(prev => [...prev, res.data])
                close()
                setName('')
            })
    };

    return (
        <Modal close={close}>
            <NewModal
                title='Добавить новый бренд товаров'
                autoFocus={true}
                value={name}
                setValue={setName}
                handleNewFetch={addNewBrandFetch}
            />
        </Modal>
    );
};

export default NewBrandModal;