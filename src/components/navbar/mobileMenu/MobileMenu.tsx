import React from 'react';
import { MdClose } from "react-icons/md";
import {classNames} from "@/utils/classNames";

type MobileMenuProps = {
    close: () => void
}

type Gender = 'Men' | 'Women'
const MobileMenu = ({close}: MobileMenuProps) => {
    const [gender, setGender] = React.useState<Gender>('Men')
    return (
        <div className='relative'>
            <button
                className='fixed w-12 h-12 bg-[#2d2d2d] opacity-100 top-0 left-[75vw] flex items-center justify-center'
                onClick={close}
            >
                <MdClose size={36} color='white'/>
            </button>
            <div className='w-full flex flex-row h-12 border-b items-center'>
                <button
                    onClick={() => setGender('Men')}
                    className={classNames(gender === 'Men' && 'underline', 'w-[100%]')}
                >
                    MEN
                </button>
                <div className="border-r h-6"></div> {/* Разделительная линия */}
                <button
                    onClick={() => setGender('Women')}
                    className={classNames(gender === 'Women' && 'underline', 'w-[100%]')}
                >
                    WOMEN
                </button>
            </div>
            <h1>Menu</h1>
        </div>
    );
};

export default MobileMenu;