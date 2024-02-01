import React, {JSX, ChangeEvent, useCallback} from 'react';
import axios from 'axios';
import Endpoints from "@/api/endpoints";
import {classNames} from "@/utils/classNames";
import {debounce} from "@/utils/debounce";

type NameInputFieldProps = {
    value: string,
    setName: (value: string, name: string) => void,
    isValidName: null | boolean,
    handleIsValidName: (value: boolean) => void
} & JSX.IntrinsicElements["input"];
const NameInputField = ({value, setName, isValidName, handleIsValidName, ...rest}: NameInputFieldProps) => {

    const debouncedPostRequest = useCallback(
        debounce((input: string) => {
            axios.post(`${Endpoints.PUBLIC.PRODUCT}/check`, { name: input })
                .then((response) => {
                    handleIsValidName(response.data)
                })
                .catch((error) => {
                    console.log(error, ' input name debounce')
                });
        }, 500), // Specify the delay (in milliseconds) for debouncing
        []
    );

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setName(value, 'name');
        debouncedPostRequest(value);
        handleIsValidName(true);
    };

    return (
        <>
            <label className="block text-sm font-medium leading-6 text-gray-900">
                Наименование товара
            </label>
            <div className="mt-2">
                <input
                    type="text"
                    value={value}
                    onChange={e => handleInputChange(e)}
                    className={classNames((isValidName === false && value !== '') &&
                        "ring-red-500 ring-1",
                        "px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    )}
                    {...rest}
                />
            </div>
            {
                (isValidName === false && value !== '') &&
                <p className="text-red-500 mt-2">Имя товара уже существует !</p>
            }
        </>
    );
};

export default NameInputField;
