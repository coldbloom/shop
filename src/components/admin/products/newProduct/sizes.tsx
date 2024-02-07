import React from 'react';
import Combobox from "@/utils/components/combobox";
import {genders, TFormData, ISize} from "@/components/admin/products/newProduct/productTypes";
import {useAppDispatch} from "@/store";
import {useAppSelector} from "@/hooks/redux";
import {fetchCategories} from "@/store/reducers/ActionCreators";
import {log} from "node:util";

type TSizesProps = {
    formData: TFormData,
    handleChangeValue: (value: any, name: string) => void
}

const sneakerMan: ISize[] = [
    {size: 39, available: false},
    {size: 40, available: false},
    {size: 40.5, available: false},

    {size: 41, available: false},
    {size: 42, available: false},
    {size: 42.5, available: false},

    {size: 43, available: false},
    {size: 44, available: false},
    {size: 44.5, available: false},

    {size: 45, available: false},
    {size: 45.5, available: false},
    {size: 46, available: false},

    {size: 47, available: false},
    {size: 47.5, available: false},
    {size: 48.5, available: false},
]
const sneakerWomen: ISize[] = [
    {size: 36, available: false},
    {size: 37, available: false},
    {size: 38, available: false},

    {size: 39, available: false},
    {size: 40, available: false},
    {size: 40.5, available: false},

    {size: 41, available: false},
    {size: 42, available: false},
    {size: 42.5, available: false},

    {size: 43, available: false},
]
const clothes: ISize[] = [
    {size: 'xs', available: false},
    {size: 's', available: false},
    {size: 'm', available: false},
    {size: 'l', available: false},
    {size: 'xl', available: false},
    {size: 'xxl', available: false},
]

const getSizes = (gender: string | undefined, category: string | undefined) => {
    if (gender === 'мужчина' && category === 'кроссовки') {
        return sneakerMan
    } else if (gender === 'женщина' && category === 'кроссовки') {
        return sneakerWomen
    } else {
        return clothes
    }
}
const Sizes = ({formData, handleChangeValue}: TSizesProps) => {
    const {gender, category} = formData
    const [sizes, setSizes] = React.useState<ISize[]>([])
    const [isChecked, setIsChecked] = React.useState(false)

    React.useEffect(() => {
        if (gender !== null && category !== null) {
            setSizes(getSizes(gender.name, category.name))
        }
    }, [gender, category])

    return (
        <div className="w-full mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12 border border-amber-700">
            <div className="sm:col-span-12">
                {gender && category
                    ? <>
                        <p className='py-2'>
                            Выберите доступные размеры для {gender.id === 0 ? 'женские' : 'мужсские'} {category.name}
                        </p>

                        <div
                            className="relative">
                            <div className="flex">
                                <label className="inline-flex relative items-center mr-5 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="sr-only peer"
                                        checked={isChecked}
                                        readOnly
                                    />
                                    <div
                                        onClick={() => {
                                            setIsChecked(!isChecked);
                                        }}
                                        className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
                                    ></div>
                                    <span className="ml-2 text-sm font-medium text-gray-900">ON</span>
                                </label>
                            </div>
                        </div>

                        <div className='flex gap-4 flex-wrap'>
                            {sizes.map(size => (
                                <button key={size.size}
                                        className='rounded-2xl border w-fit px-2 py-1'
                                >
                                    {size.size}
                                </button>
                            ))}
                        </div>
                    </>
                    : <p className='py-2'>
                        Нельзя выбрать размеры, так как категория и пол товары не заполнены!
                    </p>
                }
            </div>
        </div>
    );
};

export default Sizes;