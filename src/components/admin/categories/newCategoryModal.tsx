import React from 'react';
import {classNames} from "@/utils/classNames";
import {ICategoryResponse} from "@/api/category/types";
import Modal from "@/utils/components/modal";
import {axiosInstance} from "@/api/instance";
import Endpoints from "@/api/endpoints";
import NewModal from "@/utils/components/editionalModal/newModal";

type NewCategoryModalProps = {
    close: () => void,
    setCategories: React.Dispatch<React.SetStateAction<ICategoryResponse[]>>
};

const NewCategoryModal = ({close, setCategories}: NewCategoryModalProps) => {
    const [name, setName] = React.useState('')
    const addNewCategoryFetch = () => {
        axiosInstance
            .post(Endpoints.PUBLIC.CATEGORY, {'name': name})
            .then(res => {
                setCategories(prev => [...prev, res.data])
                close()
                setName('')
            })
    };

    React.useEffect(() => {
        return () => {
            console.log('NewCategory unmounting')
        }
    }, [])

    return (
        <Modal close={close}>
            <NewModal
                title='Добавить новую категорию'
                autoFocus={true}
                value={name}
                setValue={setName}
                handleNewFetch={addNewCategoryFetch}
            />
        </Modal>
    );
};

export default NewCategoryModal;