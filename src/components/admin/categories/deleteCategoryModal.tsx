import React from 'react';
import Modal from "@/utils/components/modal";
import {ICategoryResponse} from "@/api/category/types";
import {axiosInstance} from "@/api/instance";
import Endpoints from "@/api/endpoints";

type DeleteCategoryModalProps = {
    id: number | null,
    open: boolean,
    close: () => void,
    categories: ICategoryResponse[],
    setCategories: React.Dispatch<React.SetStateAction<ICategoryResponse[]>>
}
const DeleteCategoryModal = ({id, open, close, categories, setCategories}: DeleteCategoryModalProps) => {

    const delCategories = () => {
        axiosInstance
            .delete(`${Endpoints.PUBLIC.CATEGORY}/${id}`)
            .then(() => {
                setCategories(categories.filter(item => item.id !== id))
                close()
            })
    }
    return (
        <>
            {
                open &&
                <Modal close={close}>
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div>
                            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mt-3 text-center sm:mt-0 sm:text-left">
                                            <h3 className="text-base font-semibold leading-6 text-gray-900 pb-2">
                                                Вы действительно желаете удалить данную категорию?
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 flex justify-center">
                                    <button
                                        type="button"
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                        onClick={() => close()}
                                    >
                                        Отменить
                                    </button>
                                    <button
                                        type="button"
                                        className={
                                            "inline-flex w-full justify-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 sm:ml-3 sm:w-auto"
                                        }
                                        onClick={delCategories}
                                    >
                                        Удалить
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            }
        </>
    );
};

export default DeleteCategoryModal;