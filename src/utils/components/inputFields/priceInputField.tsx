import React, {JSX, ChangeEvent} from "react";
import {classNames} from "@/utils/classNames";

type PriceInputFieldProps = {
    label: string,
    value: string,
    setValue: (value: string, name: string) => void
    isValidPrice: boolean
} & JSX.IntrinsicElements["input"];
const PriceInputField = ({value, setValue, label, isValidPrice, ...rest}: PriceInputFieldProps) => {
    return (
        <>
            <label className="block text-sm font-medium leading-6 text-gray-900">
                {label}
            </label>
            <div className="mt-2">
                <input
                    type="text"
                    autoComplete="off"
                    value={value}
                    onChange={(e) => setValue(e.target.value, 'price')}
                    className={classNames((!isValidPrice) &&
                        "ring-red-500 ring-1",
                        "px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    )}
                    {...rest}
                />
            </div>
            {
                (!isValidPrice) &&
                <p className="text-red-500 mt-2">Некорректное значение!</p>
            }
        </>
    );
};

export default PriceInputField;