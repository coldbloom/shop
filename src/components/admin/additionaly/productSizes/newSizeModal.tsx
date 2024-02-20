import React from 'react';
import Modal from "@/utils/components/modal";
import {ISize} from "@/types/ISize";
import {hasWhiteSpaceAtBeginEnd} from "@/utils/hasWhiteSpaceAtBeginEnd";
import {classNames} from "@/utils/classNames";
import axios from "axios";
import Endpoints from "@/api/endpoints";
import {axiosInstance} from "@/api/instance";
import {IProductType} from "@/types/IProductType";
import Combobox from "@/utils/components/combobox";

type TNewSizeModalProps = {
    close: () => void,
    setSizes: React.Dispatch<React.SetStateAction<ISize[]>>,
}

interface IFormData {
    name: string,
    type: IProductType | null
}
const NewSizeModal = ({close, setSizes}: TNewSizeModalProps) => {
    const [types, setTypes] = React.useState<IProductType[] | []>([])
    const [formData, setFormData] = React.useState<IFormData>({ name: '', type: null })

    React.useEffect(() => {
        axios
            .get<IProductType[]>(Endpoints.PRODUCT_TYPE)
            .then(res => setTypes(res.data))
    }, [])

    React.useEffect(() => {
        console.log(formData)
    }, [formData])

    const changeFormData = (value: IProductType | string, key: string) => {
        setFormData(prev => ({...prev, [key]: value}))
    }

    const handleNewSizeFetch = () => {
        const {name, type} = formData;
        axiosInstance
            .post<ISize>(Endpoints.SIZE, { name, 'typeId': type?.id})
            .then(res => {
                setSizes(prev => [...prev, res.data])
            })
        close();
    }

    return (
        <Modal close={close}>
            <div
                className="flex min-h-full min-w-[400px] items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div
                    className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div className="bg-white p-8 pb-6">

                        <div className="mt-3 text-center sm:mt-0 sm:text-left">
                            <h3 className="text-lg font-semibold leading-6 text-gray-900 text-center pb-4">
                                Создать новый размер
                            </h3>

                            <Combobox
                                data={types}
                                value={formData.type}
                                setValue={changeFormData}
                                name='type'
                                placeholder='Выберите тип продукта'
                            />
                            <input
                                type="text"
                                autoFocus={false}
                                className="block w-full rounded-md mt-2 border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Введите наименование"
                                value={formData.name}
                                onChange={(e) => changeFormData(e.target.value, 'name')}
                            />
                        </div>

                    </div>
                    <div className="bg-gray-50 px-8 py-6 flex justify-between">
                        <button
                            type="button"
                            className="mt-3 inline-flex w-[100%] justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0"
                            onClick={() => close()}
                        >
                            Отменить
                        </button>
                        <button
                            type="button"
                            disabled={(formData.name.length === 0 || hasWhiteSpaceAtBeginEnd(formData.name))}
                            className={classNames(
                                (formData.name.length === 0 || hasWhiteSpaceAtBeginEnd(formData.name))
                                && 'pointer-events-none opacity-50',
                                "inline-flex w-[100%] justify-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 sm:ml-3"
                            )}
                            onClick={() => handleNewSizeFetch()}
                        >
                            Добавить
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default NewSizeModal;