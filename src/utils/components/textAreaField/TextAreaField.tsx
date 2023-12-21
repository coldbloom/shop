import React from 'react';

type TextAreaFieldProps = {
    label: string,
    value: string,
    setValue: (value: string) => void
}

const TextAreaField = ({label, value, setValue}: TextAreaFieldProps) => {
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
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>
        </>
    );
};

export default TextAreaField;