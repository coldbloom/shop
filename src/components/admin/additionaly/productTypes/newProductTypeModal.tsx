import React from 'react';
import Modal from "@/utils/components/modal";
import NewModal from "@/utils/components/editionalModal/newModal";
import {axiosInstance} from "@/api/instance";
import Endpoints from "@/api/endpoints";
import {IProductType} from "@/types/IProductType";

type TNewProductTypeModalProps = {
    close: () => void,
    setProductTypes: React.Dispatch<React.SetStateAction<IProductType[]>>
}

const NewProductTypeModal = ({close, setProductTypes}: TNewProductTypeModalProps) => {
    const [name, setName] = React.useState('')
    const addNewProductTypeFetch = () => {
        axiosInstance
            .post(Endpoints.PRODUCT_TYPE, {'name': name})
            .then(res => {
                setProductTypes(prev => [...prev, res.data])
                close()
            })
    }

    return (
        <Modal close={close}>
            <NewModal
                title='Добавить новый тип продукта'
                placeholder='введите наименование типа товара, например:&nbsp;(одежда,&nbsp;обувь,&nbsp;аксессуары&nbsp;и&nbsp;т.д.)'
                close={close}
                value={name}
                setValue={setName}
                handleNewFetch={addNewProductTypeFetch}
            />
        </Modal>
    );
};

export default NewProductTypeModal;