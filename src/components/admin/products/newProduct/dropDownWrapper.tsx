import React, {SetStateAction, useRef} from 'react';
import PlusMinusToggleButton from "@/utils/components/plusMinusToggleButton";
import {classNames} from "@/utils/classNames";

type DropDownWrapperProps = {
    title: string,
    open: boolean,
    setOpen: React.Dispatch<SetStateAction<boolean>>,
    children: React.ReactNode
}
const DropDownWrapper: React.FC<DropDownWrapperProps> = ({title, open, setOpen, children}) => {
    const ref = React.useRef<HTMLDivElement | null>(null)
    return (
        <>
            <div onClick={() => setOpen(prev => !prev)}
                 className='w-full flex flex-row items-center justify-between'>
                <h3 className='font-medium'>
                    {title}
                    <span className='text-red-500'>*</span>
                </h3>
                <PlusMinusToggleButton open={open}/>
            </div>
            <div ref={ref} className={classNames(open && 'h-auto max-h-[999px]', 'overflow-hidden w-full dropDown max-h-0')}
            >
                {children}
            </div>
            <hr className='my-6 w-full'/>
        </>
    );
};

export default DropDownWrapper;