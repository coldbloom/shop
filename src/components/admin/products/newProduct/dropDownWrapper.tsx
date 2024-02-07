import React, {SetStateAction, useRef} from 'react';
import PlusMinusToggleButton from "@/utils/components/plusMinusToggleButton";
import {classNames} from "@/utils/classNames";

type DropDownWrapperProps = {
    title: string,
    open: boolean,
    setOpen: () => void,
    children: React.ReactNode
}
const DropDownWrapper: React.FC<DropDownWrapperProps> = ({title, open, setOpen, children}) => {
    const ref = React.useRef<HTMLDivElement | null>(null)
    return (
        <>
            <div className='w-full flex flex-row items-center justify-between'>
                <h3 className='font-medium'>
                    {title}
                    <span className='text-red-500'>*</span>
                </h3>
                <PlusMinusToggleButton open={open} setOpen={setOpen}/>
            </div>
            <div ref={ref} className={classNames(open && 'h-auto', 'h-0 overflow-hidden transition-all duration-300 w-full')}
                 style={open ? {height: ref.current?.scrollHeight} : {height: '0px'}}>
                {children}
            </div>
            <hr className='my-6 w-full'/>
        </>
    );
};

export default DropDownWrapper;