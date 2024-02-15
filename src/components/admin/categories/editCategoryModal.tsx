import React from 'react';
import Modal from "@/utils/components/modal";
import {classNames} from "@/utils/classNames";
import {ICategoryResponse} from "@/api/category/types";
import {axiosInstance} from "@/api/instance";
import Endpoints from "@/api/endpoints";

type EditCategoryModal = {
    open: boolean,
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
const EditCategoryModal = ({open, close, id, name, categories, setCategories}: EditCategoryModal) => {
    const [value, setValue] = React.useState('')

    React.useEffect(() => {
        setValue(name);
    }, [name]);

    const editCategoryName = () => {
        axiosInstance
            .put(`${Endpoints.PUBLIC.CATEGORY}/${id}`, { 'newName': value})
            .then((res) => {
                const updatedCategories = mutation(categories, id, value)
                setCategories(updatedCategories)
                setValue('')
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
                                            <h3 className="text-base font-semibold leading-6 text-gray-900">
                                                Изменить наименование категории
                                            </h3>
                                            <div className="mt-2">
                                                <input
                                                    type="text"
                                                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    placeholder="Введите наименование"
                                                    value={value}
                                                    onChange={(e) => setValue(e.target.value)}
                                                />
                                            </div>
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
                                        disabled={value === name || value.length === 0}
                                        className={classNames(
                                            (value.length === 0 || value === name)
                                            && 'pointer-events-none opacity-50',
                                            "inline-flex w-full justify-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 sm:ml-3 sm:w-auto"
                                        )}
                                        onClick={editCategoryName}
                                    >
                                        Изменить
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

export default EditCategoryModal;