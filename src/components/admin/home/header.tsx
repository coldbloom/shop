import React from 'react';
import {TbLogout} from "react-icons/tb";
import {useAppDispatch} from "@/store";
import {logoutUser} from "@/store/features/auth/actionCreators";

const Header = () => {
    const dispatch = useAppDispatch()

    const logout = () => {
        dispatch(logoutUser())
    }
    return (
        <div className='w-full h-16 py-6 bg-white shadow flex justify-end px-5'>
            <button className='flex flex-row items-center' onClick={logout}>
                <TbLogout size={22}/>
                <p className='text-lg font-medium pl-2'>Выйти</p>
            </button>
        </div>
    );
};

export default Header;