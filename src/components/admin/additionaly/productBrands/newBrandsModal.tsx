import React from 'react';
import {IBrands} from "@/types/IBrands";
import Modal from "@/utils/components/modal";
import {classNames} from "@/utils/classNames";

type NewBrandModalProps = {
    open: boolean;
    close: () => void;
    setBrands: React.Dispatch<React.SetStateAction<IBrands[]>>;
};

const NewBrandModal = ({open, close, setBrands}: NewBrandModalProps) => {
    const [name, setName] = React.useState('')

    const addNewBrandModal = () => {

    };

    return (
        <>
            {
                open &&
                <Modal close={close}>
                    <div className="flex min-h-full min-w-[400px] items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div className="bg-white p-8">

                                <div className="mt-3 text-center sm:mt-0 sm:text-left">
                                    <h3 className="text-base font-semibold leading-6 text-gray-900 pb-4">
                                        Добавить новый бренд
                                    </h3>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder="Введите наименование"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
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
                                    disabled={name.length === 0}
                                    className={classNames(
                                        name.length === 0
                                        && 'pointer-events-none opacity-50',
                                        "inline-flex w-full justify-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 sm:ml-3 sm:w-auto"
                                    )}
                                    onClick={() => addNewBrandModal()}
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

export default NewBrandModal;