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
        <nav className='relative'>
            <button
                className='fixed w-12 h-12 bg-[#2d2d2d] opacity-100 top-0 left-[75vw] flex items-center justify-center'
                onClick={close}
            >
                <MdClose size={36} color='white'/>
            </button>
            <div className='w-full flex flex-row h-12 items-center'>
                <button
                    onClick={() => setGender('Women')}
                    className={classNames(gender === 'Women' && 'text-black border-b-2 border-black',
                        'font-bold text-[rgba(3,7,18,0.5)] h-full w-full border-b '
                    )}
                >
                    WOMEN
                </button>
                {/* Разделительная линия */}
                <div className="border-r h-6"></div>
                <button
                    onClick={() => setGender('Men')}
                    className={classNames(gender === 'Men' && 'text-black border-b-2 border-black',
                        'font-bold text-[rgba(3,7,18,0.5)] h-full w-full border-b '
                    )}
                >
                    MEN
                </button>
            </div>
            <h1>Menu</h1>
        </nav>
    );
};

export default MobileMenu;