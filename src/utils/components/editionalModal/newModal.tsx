import React from 'react';
import {classNames} from "@/utils/classNames";
import {hasWhiteSpaceAtBeginEnd} from "@/utils/hasWhiteSpaceAtBeginEnd";

type TNewModalProps = {
    title: string,
    close: () => void,
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>,
    handleNewFetch: () => void,
    placeholder?: string
}

const NewModal = ({title, placeholder, close, value, setValue, handleNewFetch}: TNewModalProps) => {

    React.useEffect(() => {
        console.log(value, value.length)
        console.log(value.length === 0 || hasWhiteSpaceAtBeginEnd(value))
    }, [value])

    return (
        <div className="flex min-h-full min-w-[400px] items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div
                className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white p-8 pb-6">

                    <div className="mt-3 text-center sm:mt-0 sm:text-left">
                        <h3 className="text-lg font-semibold leading-6 text-gray-900 text-center pb-4">
                            {title}
                        </h3>
                        {placeholder
                            && <p className='pb-4 text-sm text-center text-gray-500 leading-4 font-semibold'>{placeholder}</p>
                        }
                        <div className="mt-2">
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
                        disabled={(value.length === 0 || hasWhiteSpaceAtBeginEnd(value))}
                        className={classNames(
                            (value.length === 0 || hasWhiteSpaceAtBeginEnd(value))
                            && 'pointer-events-none opacity-50',
                            "inline-flex w-[100%] justify-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 sm:ml-3"
                        )}
                        onClick={() => handleNewFetch()}
                    >
                        Добавить
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewModal;