import React from 'react';
import Modal from "@/utils/components/modal";
import NameInputField from "@/utils/components/nameInputField/NameInputField";
import InputField from "@/utils/components/inputField";
import Combobox from "@/utils/components/combobox";
import TextAreaField from "@/utils/components/textAreaField/TextAreaField";
import ImageUploader from './imageUploader/index'
import {IProductResponse} from "@/api/product/types";
import {ICategoryResponse} from "@/api/category/types";
import {IImage} from "@/api/product/types";
import {equalArrayOfObjects} from "@/utils/equalArrayOfObjects"
import {sortByOrder} from "@/utils/sortByOrder";
import Endpoints from "@/api/endpoints";
import axios from "axios";
import {classNames} from "@/utils/classNames";

interface IReqDataImages {
    oldImages: IImage[],
    newImages: IImage[]
}
interface IInitialField {
    name: string,
    price: number,
    category: ICategoryResponse | undefined,
    about: string
}

type EditProductsModalProps = {
    isOpen: boolean,
    close: () => void,
    product: IProductResponse,
    products: IProductResponse[],
    setProducts: React.Dispatch<React.SetStateAction<IProductResponse[]>>,
    categories: ICategoryResponse[],
}

const findCategory = (categoryId: number, categories: ICategoryResponse[]): ICategoryResponse | undefined => {
    return categories.find(category => category.id === categoryId)
}

const findImageName = (path: string) => {
    const array = path.split('/')
    return array[array.length - 1]
}

const editImages = (images: IImage[]): IImage[] => {
    return images.map(image => {
        return {
            ...image,
            name: findImageName(image.path),
            path: `http://localhost:3031/${image.path}`
        }
    })
}

function isFormDataEmpty(formData: FormData): boolean {
    let isEmpty = true;

    formData.forEach((value, key) => {
        isEmpty = false; // Если есть хотя бы один элемент, то объект не является пустым
    });

    return isEmpty; // Если цикл завершился и нет элементов, то объект FormData пустой
}

const modifiedImages = (images: IImage[]): IReqDataImages => {
    const data:IReqDataImages = {
        newImages: [],
        oldImages: []
    }

    images.forEach((image: IImage, idx) => {
        const keysOfImage = Object.keys(image)
        if (keysOfImage.includes('file')) {
            data.newImages.push(image)
        } else {
            data.oldImages.push(image)
        }
    })

    return  data
}

const EditProductsModal = ({isOpen, close, product, products, setProducts, categories}: EditProductsModalProps) => {

    const { id: initialId, name: initialName, price: initialPrice, categoryId: initialCategoryId, about: initialAbout, images: initialImages2} = product

    const [name, setName] = React.useState(initialName)
    const [isValidName, setIsValidName] = React.useState<boolean | null>(null)
    const [price, setPrice] = React.useState(initialPrice)
    const [category, setCategory] = React.useState<ICategoryResponse | null | undefined>(findCategory(initialCategoryId, categories))
    const [about, setAbout] = React.useState(initialAbout)
    const [images, setImages] = React.useState(sortByOrder(editImages(initialImages2)))
    const [initialImages, setInitialImages] = React.useState(sortByOrder(editImages(initialImages2)))
    const [initialFields, setInitialFields] = React.useState<IInitialField>({
        name: name,
        price: price,
        category: findCategory(initialCategoryId, categories),
        about: about
    })
    const [isDirty, setIsDirty] = React.useState(false)

    React.useEffect(() => {
        if (initialFields !== null) {
            if (
                name === initialFields.name &&
                price === initialFields.price &&
                category === initialFields.category &&
                about === initialFields.about &&
                equalArrayOfObjects(initialImages, images)
            ) {
                setIsDirty(false)
                console.log('Каждое из полей осталось неизменным')
            } else {
                setIsDirty(true)
                console.log('Хотя бы одно поле было изменено')
            }
        }
    }, [isValidName, name, price, category, about, images])

    const editProduct = () => {
        const data = new FormData()

        if (initialFields !== null) {
            if (name !== initialFields.name) {
                data.append('name', name)
            }

            if (price !== initialFields.price) {
                data.append('price', String(price))
            }

            if (category !== initialFields.category) {
                data.append('categoryId', String(category && category.id))
            }

            if (about !== initialFields.about) {
                data.append('about', about)
            }
        }

        if (!equalArrayOfObjects(initialImages, images)) {
            const reqDataImages = modifiedImages(images)

            if (reqDataImages.newImages.length !== 0) {
                const newImages = reqDataImages.newImages
                newImages.forEach((newImage, idx) => (
                    newImage.file && data.append(`order=${newImage.order}`, newImage.file) // проверка newImage.file - существует ли, для ts
                ))
            }

            if (reqDataImages.oldImages.length !== 0) {
                const oldImages = reqDataImages.oldImages.map(oldImage => {
                    return {
                        'id': oldImage.id,
                        'name': oldImage.name,
                        'order': oldImage.order,
                    }
                })
                data.append(`oldImages`, JSON.stringify(oldImages))
            }

        }  else {
            console.log('images НЕ был изменен')
        }

        // проверяем пустая ли formData
        if (!isFormDataEmpty(data)) {
            axios.patch(`${Endpoints.PUBLIC.PRODUCT}/${product.id}`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }).then((res) => {
                const updatedProduct = res.data;
                const actualProducts = products.map(product => {
                    if (product.id === Number(updatedProduct.id)) {
                        return updatedProduct
                    }
                    return product
                })
                setProducts(actualProducts);
            }).catch((err) => {
                console.log(err, 'patch запрос прошел с ошибкой')
            })
        }
        close()
    }

    const priceChange = (price: string) => {
        setPrice(Number(price))
    }

    return (
        <>
            {
                isOpen && product !== null &&
                <Modal close={close}>
                    <div className="modal max-w-[70vw] max-h-[80vh] overflow-y-auto rounded-lg">
                        <div
                            className="bg-white text-left shadow-xl transition-all">
                            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div className="px-20">
                                    <form action="">
                                        <div className="min-w-[450px]">
                                            <div className="border-b border-gray-900/10 pb-2 flex flex-row items-center justify-between">
                                                <h2 className="text-base font-semibold leading-7 text-gray-900">
                                                    Редактирование товара
                                                </h2>
                                                <p className='font-medium'>ID: {product.id}</p>
                                            </div>

                                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12">
                                                <div className="sm:col-span-12">
                                                    <NameInputField
                                                        name={name}
                                                        setName={setName}
                                                        isValidName={isValidName}
                                                        setIsValidName={setIsValidName}
                                                        initialName={initialFields ? initialFields.name : null}
                                                    />
                                                </div>

                                                <div className="sm:col-span-6">
                                                    <InputField label={'Цена'} value={String(price)}
                                                                setValue={priceChange}/>
                                                </div>

                                                <div className="sm:col-span-6">
                                                    <label
                                                        className="block text-sm font-medium leading-6 text-gray-900">
                                                        Категория
                                                    </label>
                                                    {
                                                        category &&
                                                        <div className="mt-2">
                                                            <Combobox
                                                                value={category}
                                                                setValue={setCategory}
                                                                data={categories}
                                                            />
                                                        </div>
                                                    }
                                                </div>

                                                <div className="col-span-full">
                                                    <TextAreaField
                                                        label={'Описание'}
                                                        value={about}
                                                        setValue={setAbout}
                                                    />
                                                </div>

                                                <div className="col-span-full mt-2">
                                                    <ImageUploader images={images} setImages={setImages}/>
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
                                    onClick={() => editProduct()}
                                    disabled={(isValidName === false) || !isDirty} // isValidName может иметь значение null => !null эквивалентно false
                                    className={classNames(
                                        ((isValidName === false) || !isDirty)
                                        && 'pointer-events-none opacity-50',
                                        "inline-flex w-full justify-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 sm:ml-3 sm:w-auto"
                                    )}
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

export default EditProductsModal;