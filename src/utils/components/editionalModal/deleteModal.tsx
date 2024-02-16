import React from 'react';

type TDeleteModalProps = {
    handleDelFetch: () => void,
    close: () => void,
    title: string
}
const DeleteModal = ({handleDelFetch, close, title}: TDeleteModalProps) => {
    return (
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div
                className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white p-8 pb-6">
                    <div className="sm:flex sm:items-start">
                        <div className="mt-3 text-center sm:mt-0 sm:text-left">
                            <h3 className="text-lg font-semibold leading-6 text-gray-900 text-center">
                                {title}
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 px-8 py-6 flex justify-center">
                    <button
                        type="button"
                        className="mt-3 inline-flex w-[100%] justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0"
                        onClick={() => close()}
                    >
                        Отменить
                    </button>
                    <button
                        type="button"
                        className={
                            "inline-flex w-[100%] justify-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 sm:ml-3"
                        }
                        onClick={handleDelFetch}
                    >
                        Удалить
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;