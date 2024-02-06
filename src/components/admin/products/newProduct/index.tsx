import React from 'react';
import DropDownWrapper from "@/components/admin/products/newProduct/dropDownWrapper";
import Info from './info'
import {ICategoryResponse} from "@/api/category/types";
import {IGender, TFormData} from "./productTypes";

type TFormData = {
    name: { value: string, isValid: boolean },
    price: string,
    category: null | ICategoryResponse,
    gender: null | IGender,
    brand: string,
    about: string,
}

const NewProduct = () => {
    const [dropDown, setDropDown] = React.useState({
        info: false,
        sizes: false,
        media: false,
    })
    const handleDropDownToggle = (dropDown) => {
        setDropDown(prevState => ({
            ...prevState,
            [dropDown]: !prevState[dropDown]
        }));
    }

    const [formData, setFormData] = React.useState<TFormData>({
        name: { value: '', isValid: true },
        price: '',
        category: null,
        gender: null,
        brand: '',
        about: ''
    })

    const handleChangeValue = (value: any, name: string) => {
        if (name === 'name') {
            setFormData((prev) => ({
                ...prev,
                [name]: {
                    ...prev['name'],
                    'value': value
                }
            }));
            debouncedPostRequest(value);
        } else {
            console.log('all other')
            setFormData((prev) => ({
                ...prev,
                [name]: value
            }));
        }
    }



    return (
        <div className='w-full h-full flex flex-col items-center justify-center pt-12 px-32'>
            <DropDownWrapper
                title='Основная информация'
                open={dropDown['info']}
                setOpen={() => handleDropDownToggle('info')}
            >
                <Info
                    formData={formData}
                    handleChangeValue={handleChangeValue}
                />
            </DropDownWrapper>

            <DropDownWrapper
                title='Доступные размеры'
                open={dropDown['sizes']}
                setOpen={() => handleDropDownToggle('sizes')}
            >
                <p>Доступные размеры контент</p>
            </DropDownWrapper>

            <DropDownWrapper
                title='Медиа'
                open={dropDown['media']}
                setOpen={() => handleDropDownToggle('media')}
            >
                <p>Медиа контент</p>
            </DropDownWrapper>

            <div className='w-full flex justify-end'>
                <button className='bg-indigo-600 text-white font-medium px-4 py-2 rounded-lg'>Опубликовать товар</button>
            </div>
        </div>
    );
};

export default NewProduct;