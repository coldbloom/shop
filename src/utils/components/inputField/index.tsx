import React, {JSX, ChangeEvent} from "react";
import {classNames} from "@/utils/classNames";

type PriceInputFieldProps = {
    label: string,
    value: string,
    setValue: (value: string, name: string) => void
    name: string
    isValid?: boolean
    errorString?: string
} & JSX.IntrinsicElements["input"];
const InputField = ({value, setValue, label, isValid = true, name, errorString = '', ...rest}: PriceInputFieldProps) => {
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
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value, name)}
                    className={classNames((!isValid) &&
                        "ring-red-500 ring-2 focus:ring-red-500",
                        "px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    )}
                    {...rest}
                />
            </div>
            {
                (!isValid) &&
                <p className="text-red-500 font-medium mt-2">{errorString}</p>
            }
        </>
    );
};

export default InputField;