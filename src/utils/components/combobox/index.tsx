import React from 'react';
import {ICategoryResponse} from "@/api/category/types";
import { MdKeyboardArrowDown } from "react-icons/md";
import {classNames} from "@/utils/classNames";
import {IGender} from "@/components/admin/products/newProductModal";
import {IProductType} from "@/types/IProductType";

type ComboboxProps = {
    data: ICategoryResponse[],
    value: ICategoryResponse | null,
    setValue: (value: ICategoryResponse | IGender | IProductType, name: string) => void,
    name: string,
    placeholder: string
}
const Combobox = ({data, value, setValue, name, placeholder}: ComboboxProps) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const containerRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return (
        <div ref={containerRef} className='relative mt-2 w-full'>
            <div className={classNames(isOpen && 'ring-2 ring-inset ring-indigo-600',
                "p-2 flex flex-row justify-between items-center w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6")}
                 onClick={() => setIsOpen(!isOpen)}
            >
                <p className="">
                    {value ? value.name : placeholder}
                </p>
                <MdKeyboardArrowDown className='ml-2' size={20}/>
            </div>
            {isOpen && (
                <div className="absolute w-full shadow-xl mt-2 bg-white divide-y divide-gray-100 rounded-lg dark:bg-gray-700 z-20">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                        {data.map(item => (
                            <li key={item.id}
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                onClick={() => {
                                    setValue(item, name)
                                    setIsOpen(false)
                                }}
                            >
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Combobox;