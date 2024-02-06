import React, {SetStateAction} from 'react';
import s from './plusMinus.module.css'
import {classNames} from "@/utils/classNames";

type PlusMinusToggleButtonProps = {
    open: boolean,
    setOpen: React.Dispatch<SetStateAction<boolean>>
}
const PlusMinusToggleButton = ({open, setOpen}: PlusMinusToggleButtonProps) => {
    return (
        <button onClick={() => setOpen(prev => !prev)}
                className={classNames(open && `${s.opened}`, `${s.circlePlus} ${s.closed}`)}
        >
            <div className={`${s.circle}`}>
                <div className={`${s.horizontal}`}></div>
                <div className={`${s.vertical}`}></div>
            </div>
        </button>
    );
};

export default PlusMinusToggleButton;