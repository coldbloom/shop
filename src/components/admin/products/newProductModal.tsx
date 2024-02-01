import React from 'react';
import {classNames} from "@/utils/classNames";
import Modal from "@/utils/components/modal";
import Combobox from "@/utils/components/combobox";
import {ICategoryResponse} from "@/api/category/types";
import InputField from "../../../utils/components/inputFields";
import TextAreaField from "@/utils/components/textAreaField/TextAreaField";
import axios from "axios";
import Endpoints from "@/api/endpoints";
import {IProductResponse} from "@/api/product/types";
import NameInputField from "@/utils/components/inputFields/nameInputField";
import ImageUploader from './imageUploader/index'
import {IImage} from "@/api/product/types";
import PriceInputField from "@/utils/components/inputFields/priceInputField";

type NewProductModalProps = {
    open: boolean,
    close: () => void,
    categories: ICategoryResponse[],
    addNewProductChange: (newProduct: IProductResponse) => void
}

type TFormData = {
    name: string,
    isValidName: boolean | null,
    price: { value: string, isValid: boolean },
    category: null | ICategoryResponse,
    gender: null | IGender,
    brand: string,
    about: string,
}

export interface IGender {
    id: number,
    name: string
}

const genders = [
    { id: 0, name: 'женщина' },
    { id: 1, name: 'мужчина' },
]

const cutLastSpace = (str: string): string => {
    if (str.indexOf(' ') > 0) {
        return str.slice(0, str.indexOf(' '))
    }
    return str
}

const NewProductModal = ({open, close, categories, addNewProductChange}: NewProductModalProps) => {

    const [images, setImages] = React.useState<IImage[] | []>([])
    const [formData, setFormData] = React.useState<TFormData>({
        name: '',
        isValidName: true,
        price: { value: '', isValid: true },
        category: null,
        gender: null,
        brand: '',
        about: ''
    })
    const handleChangeValue = (value: any, name: string) => {
        if (name === 'price') {
            setFormData((prev) => ({
                ...prev,
                [name]: { value: cutLastSpace(value), isValid: !!Number(value)}
            }))
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value
            }))
        }
    }

    const handleIsValidName = (value: null | boolean) => {
        setFormData((prev) => ({
            ...prev,
            ['isValidName']: value
        }))
    }

    const isDisabledButton = () => {
        return !(formData.name !== '' && formData.isValidName !== false && formData.price.value !== '' && formData.category !== null && formData.about !== '' && images.length !== 0);
    }

    const addNewProduct = ()=> {
        const data = new FormData()

        data.append('name', formData.name)
        data.append('price', formData.price.value)
        data.append('categoryId', String(formData.category && formData.category.id))
        data.append('about', formData.about)

        images.forEach((item: IImage, idx) => {
            if (item.file)
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
                                                        value={formData.name}
                                                        setName={handleChangeValue}
                                                        isValidName={formData.isValidName}
                                                        handleIsValidName={handleIsValidName}
                                                        name='name'
                                                    />
                                                </div>

                                                <div className="sm:col-span-6">
                                                    <label
                                                        className="block text-sm font-medium leading-6 text-gray-900">
                                                        Пол
                                                    </label>
                                                    <div className="mt-2">
                                                        <Combobox
                                                            value={formData.gender}
                                                            setValue={handleChangeValue}
                                                            data={genders}
                                                            name='gender'
                                                        />
                                                    </div>
                                                </div>

                                                <div className="sm:col-span-6">
                                                    <label
                                                        className="block text-sm font-medium leading-6 text-gray-900">
                                                        Категория
                                                    </label>
                                                    <div className="mt-2">
                                                        <Combobox
                                                            value={formData.category}
                                                            setValue={handleChangeValue}
                                                            data={categories}
                                                            name='category'
                                                        />
                                                    </div>
                                                </div>

                                                <div className="sm:col-span-6">
                                                    <PriceInputField
                                                        label='Цена'
                                                        value={formData.price.value}
                                                        setValue={handleChangeValue}
                                                        isValidPrice={formData.price.isValid}
                                                        name='price'
                                                    />
                                                </div>

                                                <div className="sm:col-span-6">
                                                    <InputField
                                                        label='Бренд'
                                                        value={formData.brand}
                                                        setValue={handleChangeValue}
                                                        name='brand'
                                                    />
                                                </div>

                                                <div className="col-span-full">
                                                    <TextAreaField
                                                        label={'Описание'}
                                                        value={formData.about}
                                                        setValue={handleChangeValue}
                                                        name='about'
                                                    />
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
                                    disabled={isDisabledButton()}
                                    className={classNames(
                                        isDisabledButton()
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