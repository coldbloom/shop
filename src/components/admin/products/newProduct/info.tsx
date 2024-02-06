import React from 'react';
import InputField from "@/utils/components/inputField";
import Combobox from "@/utils/components/combobox";
import TextAreaField from "@/utils/components/textAreaField/TextAreaField";
import {TFormData, genders} from "./productTypes";

type TInfoProps = {
    formData: TFormData
}
const Info = ({formData, handleChangeValue}): TInfoProps => {
    return (
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12">

            <div className="sm:col-span-12">
                <InputField
                    label='Наименование'
                    value={formData.name.value}
                    setValue={handleChangeValue}
                    isValid={formData.name.isValid}
                    name='name'
                    errorString='Имя товара уже существует !'
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
                <InputField
                    label='Цена'
                    value={formData.price}
                    setValue={handleChangeValue}
                    name='price'
                    type={'number'}
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

        </div>
    );
};

export default Info;