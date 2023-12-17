import React from 'react';
import {classNames} from "@/utils/classNames";
import Modal from "@/utils/components/modal";
import Combobox from "@/utils/components/combobox";
import categories from "@/components/admin/categories";
import {ICategoryResponse} from "@/api/category/types";
import ImageUploader from "@/components/admin/products/imageUploader";

type NewProductModalProps = {
    open: boolean,
    close: () => void,
    categories: ICategoryResponse[],
}

const NewProductModal = ({open, close, categories}: NewProductModalProps) => {
    return (
        <>
            {
                open &&
                <Modal close={close}>
                    <div className="max-w-[70vw] max-h-[80vh] overflow-y-auto rounded-lg">
                        <div
                            className="bg-white text-left shadow-xl transition-all">
                            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div className="px-20">
                                    <form action="">
                                        <div className="">
                                            <div className="border-b border-gray-900/10 pb-2">
                                                <h2 className="text-base font-semibold leading-7 text-gray-900">Создание
                                                    товара</h2>
                                            </div>

                                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12">
                                                <div className="sm:col-span-12">
                                                    <label htmlFor="username"
                                                           className="block text-sm font-medium leading-6 text-gray-900">
                                                        Наименование товара
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            type="text"
                                                            name="first-name"
                                                            id="first-name"
                                                            autoComplete="given-name"
                                                            className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="sm:col-span-6">
                                                    <label htmlFor="email"
                                                           className="block text-sm font-medium leading-6 text-gray-900">
                                                        Цена
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            id="email"
                                                            name="email"
                                                            type="email"
                                                            autoComplete="email"
                                                            className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="sm:col-span-6">
                                                    <label htmlFor="email"
                                                           className="block text-sm font-medium leading-6 text-gray-900">
                                                        Категория
                                                    </label>
                                                    <div className="mt-2">
                                                        <Combobox categories={categories}/>
                                                    </div>
                                                </div>

                                                <div className="col-span-full">
                                                    <label htmlFor="about"
                                                           className="block text-sm font-medium leading-6 text-gray-900">
                                                        Описание
                                                    </label>
                                                    <div className="mt-2">
                                                        <textarea
                                                            name="about"
                                                            rows={3}
                                                            className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                            defaultValue={''}
                                                        />
                                                    </div>
                                                    {/*<p className="mt-3 text-sm leading-6 text-gray-600">Опишите товар.</p>*/}
                                                </div>

                                                <div className="col-span-full mt-2">
                                                    <ImageUploader />
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
                                    //disabled={name.length === 0}
                                    className={classNames(
                                        0 === 0
                                        && 'pointer-events-none opacity-50',
                                        "inline-flex w-full justify-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 sm:ml-3 sm:w-auto"
                                    )}
                                    //onClick={() => addNewCategoryFetch()}
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