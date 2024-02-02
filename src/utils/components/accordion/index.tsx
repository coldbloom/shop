import React from 'react';
import {FiChevronRight} from 'react-icons/fi'
import {classNames} from "@/utils/classNames";

type TAccordionProps = {
    title: string,
    children: React.ReactNode // добавляем children в тип TAccordionProps
}
const Accordion = ({ title, children }: TAccordionProps) => {
    const accordion = React.useRef<HTMLDivElement>(null)
    const [open, setOpen] = React.useState<boolean>(false)
    const [height, setHeight] = React.useState('0px')

    return (
        <li>
            <button onClick={() => setOpen(prev => !prev)}>
                {title}
            </button>
            <div className={classNames(open && 'h-auto', 'h-[0px] overflow-hidden transition-all duration-300')}>
                {children}
            </div>
        </li>
    );
};

export default Accordion;