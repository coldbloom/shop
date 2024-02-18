import React from 'react';
import {classNames} from "@/utils/classNames";
import {hasWhiteSpaceAtBeginEnd} from "@/utils/hasWhiteSpaceAtBeginEnd";

type TEditModalProps = {
    title: string,
    close: () => void,
    name: string,
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>
    handleEditFetch: () => void
}

const EditModal = ({title, close, name, value, setValue, handleEditFetch}: TEditModalProps) => {

    return (
        <div className="flex min-h-full items-end justify-center p-6 text-center sm:items-center sm:p-0">
            <div
                className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white p-8 pb-6">
                    <div className="sm:flex sm:items-start">
                        <div className="text-center sm:mt-0 sm:text-left">
                            <h3 className="text-lg font-semibold leading-6 text-gray-900 pb-4 text-center">
                                {title}
                            </h3>
                            <input
                                type="text"
                                autoFocus={true}
                                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Введите наименование"
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 px-8 py-6 flex justify-between">
                    <button
                        type="button"
                        className="mt-3 inline-flex w-[100%] justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0"
                        onClick={() => close()}
                    >
                        Отменить
                    </button>
                    <button
                        type="button"
                        disabled={value === name || value.length === 0 || hasWhiteSpaceAtBeginEnd(value)}
                        className={classNames(
                            (value.length === 0 || value === name || hasWhiteSpaceAtBeginEnd(value))
                            && 'pointer-events-none opacity-50',
                            "inline-flex w-[100%] justify-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 sm:ml-3"
                        )}
                        onClick={handleEditFetch}
                    >
                        Изменить
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditModal;