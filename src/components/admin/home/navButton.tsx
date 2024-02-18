import React from 'react';
import {classNames} from "@/utils/classNames";
import {IoIosArrowForward} from "react-icons/io";

type TNavButtonProps = {
    id: number,
    currentNav: number,
    setNav: (id: number) => void,
    title: string,
    isImageArrow?: boolean,
    classProp?: string
}
const NavButton = ({id, currentNav, setNav, title, isImageArrow, classProp}: TNavButtonProps) => {
    return (
        <button onClick={() => setNav(id)}
                className={classNames(
                    currentNav === id
                        ? 'bg-indigo-700 text-white'
                        : 'text-gray-300 hover:bg-indigo-700 hover:text-white',
                    `rounded-md px-3 py-2 font-medium my-2 w-full flex flex-row items-center`
                )}
        >
            {isImageArrow && <IoIosArrowForward/>}
            <p className={classNames(!isImageArrow && 'pl-2', classProp)}>{title}</p>
        </button>
    );
};

export default NavButton;