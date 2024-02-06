import React from 'react';
import { IoIosArrowDown } from "react-icons/io";
import {classNames} from "@/utils/classNames";

type TAccordionProps = {
    title: string,
    id: number,
    accordion: number | null,
    handleOpen: (id: number) => void,
    children: React.ReactNode // добавляем children в тип TAccordionProps
}
const Accordion = ({ title, id, accordion, handleOpen, children }: TAccordionProps) => {
    const itemRef = React.useRef<HTMLDivElement | null>(null)

    return (
        <li className='py-1'>
            <button onClick={() => handleOpen(id)}
                    className={classNames(
                        accordion === id
                            ? 'bg-indigo-700 text-white'
                            : 'text-gray-300 hover:bg-indigo-700 hover:text-white',
                        'rounded-md px-3 py-2 font-medium my-2 first:my-0 w-full flex flex-row justify-between items-center'
                    )}
            >
                <p>{title}</p>
                <IoIosArrowDown
                    className={classNames(accordion === id && 'rotate-180 transition-all duration-300')}
                />
            </button>
            <div className={classNames(accordion === id && 'h-auto', 'h-[0px] overflow-hidden transition-all duration-300')}
                 style={ accordion === id ? {height: itemRef.current?.scrollHeight} : {height: '0px'}}
                 ref={itemRef}
            >
                <>
                    {children}
                </>
            </div>
        </li>
    );
};

export default Accordion;