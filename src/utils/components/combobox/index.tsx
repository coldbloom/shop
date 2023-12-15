import React from 'react';
import {ICategoryResponse} from "@/api/category/types";
import { MdKeyboardArrowDown } from "react-icons/md";
import {classNames} from "@/utils/classNames";

type ComboboxProps = {
    categories: ICategoryResponse[],
}
const Combobox = ({categories}: ComboboxProps) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const [selectedValue, setSelectedValue] = React.useState('')
    const containerRef = React.useRef(null);

    React.useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target)
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
        <div ref={containerRef}>
            <div className={classNames(isOpen && 'ring-2 ring-inset ring-indigo-600',
                "p-2 flex flex-row justify-between items-center w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6")}
                 onClick={() => setIsOpen(!isOpen)}
            >
                <p className="">
                    {selectedValue || 'Выберите категорию'}
                </p>
                <MdKeyboardArrowDown className='ml-2' size={20}/>
            </div>
            {isOpen && (
                <div className="bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                        {categories.map(category => (
                            <li key={category.id}
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                onClick={() => {
                                    setSelectedValue(category.name)
                                    setIsOpen(false)
                                }}
                            >
                                {category.name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Combobox;