import React, {JSX, ChangeEvent} from 'react';

type TextAreaFieldProps = {
    label: string,
    value: string,
    setValue: (value: string, name: string) => void,
    name: string,
} & JSX.IntrinsicElements["textarea"];

const TextAreaField = ({label, value, setValue, name, ...rest}: TextAreaFieldProps) => {
    return (
        <>
            <label htmlFor="about"
                   className="block text-sm font-medium leading-6 text-gray-900"
            >
                {label}
            </label>
            <div className="mt-2">
                <textarea
                    rows={3}
                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={value}
                    onChange={e => setValue(e.target.value, name)}
                    {...rest}
                />
            </div>
        </>
    );
};

export default TextAreaField;