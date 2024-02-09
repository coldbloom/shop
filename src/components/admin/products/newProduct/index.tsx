import React, {useCallback} from 'react';
import DropDownWrapper from "@/components/admin/products/newProduct/dropDownWrapper";
import Info from './info'
import Sizes from "./sizes";
import {ICategoryResponse} from "@/api/category/types";
import {IGender, TFormData, IDropDown} from "./productTypes";
import {debounce} from "@/utils/debounce";
import axios, {AxiosResponse} from "axios";
import Endpoints from "@/api/endpoints";
import ImageUploader from "@/components/admin/products/imageUploader";
import {IImage} from "@/api/product/types";

const NewProduct = () => {
    const [dropDown, setDropDown] = React.useState<IDropDown>({
        info: false,
        sizes: false,
        media: false,
    })
    const handleDropDownToggle = (dropDown: string) => {
        setDropDown(prevState => ({
            ...prevState,
            [dropDown]: !prevState[dropDown]
        }));
    }

    const [formData, setFormData] = React.useState<TFormData>({
        name: {value: '', isValid: true},
        price: '',
        category: null,
        gender: null,
        brand: '',
        about: ''
    })
    const [images, setImages] = React.useState<IImage[] | []>([])

    const debouncedPostRequest = useCallback(
        debounce((input: string) => {
            axios.post(`${Endpoints.PUBLIC.PRODUCT}/check`, { name: input })
                .then((response: AxiosResponse) => {
                    setFormData((prev) => ({
                        ...prev,
                        ['name']: {
                            ...prev['name'],
                            'isValid': response.data
                        }
                    }))
                })
                .catch((error) => {
                    console.log(error, ' input name debounce')
                });
        }, 500), // Specify the delay (in milliseconds) for debouncing
        []
    );

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
            setFormData((prev) => ({
                ...prev,
                [name]: value
            }));
        }
    }

    return (
        <div className='w-full h-full flex flex-col items-center justify-center pt-12 lg:px-[120px] xl:px-[180px] 2xl:px-[300px] px-[20px]'>
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
                <Sizes
                    formData={formData}
                    handleChangeValue={handleChangeValue}
                />
            </DropDownWrapper>

            <DropDownWrapper
                title='Медиа'
                open={dropDown['media']}
                setOpen={() => handleDropDownToggle('media')}
            >
                <div className='pt-5 pb-10'>
                    <ImageUploader
                        images={images}
                        setImages={setImages}
                    />
                </div>
            </DropDownWrapper>

            <div className='w-full flex justify-end pb-16'>
                <button className='bg-indigo-600 text-white font-medium px-4 py-2 rounded-lg'>Опубликовать товар
                </button>
            </div>
        </div>
    );
};

export default NewProduct;