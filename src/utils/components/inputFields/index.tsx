import {JSX, ChangeEvent} from "react";

type InputFieldProps = {
    label: string,
    value: string,
    setValue: (value: string, name: string) => void,
    name: string
} & JSX.IntrinsicElements["input"];
const InputField = ({value, setValue, label, name, ...rest}: InputFieldProps) => {
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
                    onChange={(e) => setValue(e.target.value, name)}
                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    {...rest}
                />
            </div>
        </>
    );
};

export default InputField;