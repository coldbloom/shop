import React from 'react';
import {classNames} from "@/utils/classNames";
import Modal from "@/utils/components/modal";
import Combobox from "@/utils/components/combobox";
import {ICategoryResponse} from "@/api/category/types";
import InputField from "@/utils/components/inputField";
import TextAreaField from "@/utils/components/textAreaField/TextAreaField";
import axios from "axios";
import Endpoints from "@/api/endpoints";
import {IProductResponse} from "@/api/product/types";
import NameInputField from "@/utils/components/nameInputField/NameInputField";
import ImageUploader from './imageUploader/index'

export interface IImage {
    file: File,
    id: number,
    name: string,
    order: number,
    url: string
}

type NewProductModalProps = {
    open: boolean,
    close: () => void,
    categories: ICategoryResponse[],
    addNewProductChange: (newProduct: IProductResponse) => void
}

const NewProductModal = ({open, close, categories, addNewProductChange}: NewProductModalProps) => {
    const [name, setName] = React.useState('')
    const [isValidName, setIsValidName] = React.useState<boolean | null>(null)
    const [price, setPrice] = React.useState('')
    const [category, setCategory] = React.useState<ICategoryResponse | null>(null)
    const [about, setAbout] = React.useState('')
    const [images, setImages] = React.useState([])

    const [isDisabled, setIsDisabled] = React.useState(true)

    React.useEffect(() => {
        console.log(images)
    }, [images])

    React.useEffect(() => {
        if (!open) {
            setName('')
            setPrice('')
            setCategory(null)
            setAbout('')
            setImages([])
        }
    }, [open])

    React.useEffect(() => {
        if (name !== '' && isValidName !== false && price !== '' && category !== null && about !== '' && images.length !== 0) {
            setIsDisabled(false)
        } else {
            setIsDisabled(true)
        }
    }, [name, price, category, about, images, isValidName])

    const addNewProduct = ()=> {
        const data = new FormData()

        data.append('name', name)
        data.append('price', price)
        data.append('categoryId', String(category && category.id))
        data.append('about', about)

        images.forEach((item: IImage, idx) => {
            data.append(`order=${idx + 1}`, item.file)
        })

        axios.post(`${Endpoints.PUBLIC.PRODUCT}`, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        }).then((res) => {
            console.log('Запрос отправлен', res)
            addNewProductChange(res.data)
            close();
        }).catch((error) => {
            console.log(error, 'Ошибка на запрос создания продукта')
        })
    }

    return (
        <>
            {
                open &&
                <Modal close={close}>
                    <div className="modal max-w-[70vw] max-h-[80vh] overflow-y-auto rounded-lg">
                        <div
                            className="bg-white text-left shadow-xl transition-all">
                            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div className="px-20">
                                    <form action="">
                                        <div className="min-w-[450px]">
                                            <div className="border-b border-gray-900/10 pb-2">
                                                <h2 className="text-base font-semibold leading-7 text-gray-900">Создание товара</h2>
                                            </div>

                                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12">

                                                <div className="sm:col-span-12">
                                                    <NameInputField
                                                        name={name}
                                                        setName={setName}
                                                        isValidName={isValidName}
                                                        setIsValidName={setIsValidName}
                                                        initialName={''}
                                                    />
                                                </div>

                                                <div className="sm:col-span-6">
                                                    <InputField label={'Цена'} value={price} setValue={setPrice}/>
                                                </div>

                                                <div className="sm:col-span-6">
                                                    <label
                                                        className="block text-sm font-medium leading-6 text-gray-900">
                                                        Категория
                                                    </label>
                                                    <div className="mt-2">
                                                        <Combobox
                                                            value={category}
                                                            setValue={setCategory}
                                                            data={categories}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="col-span-full">
                                                    <TextAreaField label={'Описание'} value={about}
                                                                   setValue={setAbout}/>
                                                </div>

                                                <div className="col-span-full mt-2">
                                                    <ImageUploader
                                                        images={images}
                                                        setImages={setImages}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
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
                                    disabled={isDisabled}
                                    className={classNames(
                                        isDisabled
                                        && 'pointer-events-none opacity-50',
                                        "inline-flex w-full justify-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 sm:ml-3 sm:w-auto"
                                    )}
                                    onClick={() => addNewProduct()}
                                >
                                    Добавить
                                </button>
                            </div>
                        </div>
                    </div>
                </Modal>
            }
        </>
    );
};

export default NewProductModal;