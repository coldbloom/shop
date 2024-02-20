import React from 'react';
import DeleteModal from "@/utils/components/editionalModal/deleteModal";
import Modal from "@/utils/components/modal";
import {axiosInstance} from "@/api/instance";
import Endpoints from "@/api/endpoints";
import {ISize} from "@/types/ISize";

type DeleteSizeModalProps = {
    sizeId: number,
    close: () => void,
    setSizes: React.Dispatch<React.SetStateAction<ISize[]>>
}
const DeleteSizeModal = ({sizeId, close, setSizes}: DeleteSizeModalProps) => {
    const delSizeFetch = () => {
        axiosInstance
            .delete(`${Endpoints.SIZE}/${String(sizeId)}`)
            .then(() => {
                setSizes(prev => prev.filter(size => size.id !== sizeId))
                close()
            })
    }

    React.useEffect(() => {
        return () => {
            close();
        }
    })

    return (
        <Modal close={close}>
            <DeleteModal
                handleDelFetch={delSizeFetch}
                close={close}
                title='Вы действительно желаете удалить данный размер?'
            />
        </Modal>
    );
};

export default DeleteSizeModal;