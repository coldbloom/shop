import React, { useCallback } from 'react';
import axios from 'axios';
import Endpoints from "@/api/endpoints";
import {classNames} from "@/utils/classNames";

type NameInputFieldProps = {
    name: string,
    setName: (newName: string) => void,
    isValidName: null | boolean,
    setIsValidName: (isValidName: null | boolean) => void,
    initialName: string | null
}
const NameInputField = ({name, setName, isValidName, setIsValidName, initialName}: NameInputFieldProps) => {
    // Debounce function to delay the execution of the API request
    const debounce = (callback: Function, delay: number) => {
        let timerId: NodeJS.Timeout;
        return (...args: any[]) => {
            clearTimeout(timerId);
            timerId = setTimeout(() => {
                callback(...args);
            }, delay);
        };
    };

    const debouncedPostRequest = useCallback(
        debounce((input: string) => {
            axios.post(`${Endpoints.PUBLIC.PRODUCT}/check`, { name: input })
                .then((response) => {
                    setIsValidName(response.data)
                })
                .catch((error) => {
                    console.log(error, ' input name debounce')
                });
        }, 500), // Specify the delay (in milliseconds) for debouncing
        []
    );

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        setName(inputValue)
        setIsValidName(null)
        debouncedPostRequest(inputValue);
    };

    return (
        <>
            <label className="block text-sm font-medium leading-6 text-gray-900">
                Наименование товара
            </label>
            <div className="mt-2">
                <input
                    type="text"
                    value={name}
                    onChange={handleInputChange}
                    className={classNames(isValidName === false && initialName !== name &&
                        "ring-red-500 ring-1",
                        "px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    )}
                />
            </div>
            {
                isValidName === false && initialName !== name &&
                <p className="text-red-500 mt-2">Имя товара уже существует !</p>
            }
        </>
    );
};

export default NameInputField;
