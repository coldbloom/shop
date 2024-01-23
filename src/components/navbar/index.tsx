import React from 'react';
import Hamburger from "@/utils/components/hamburger";
import Link from "next/link"

import {MdFavoriteBorder} from "react-icons/md";
import {RiShoppingBagLine} from "react-icons/ri";
import {BiSearch} from "react-icons/bi";
import MobileWrapper from "@/components/navbar/mobileMenu/MobileWrapper";

import Search from './search'

const Navbar = () => {
    const [open, setOpenMenu] = React.useState(false)

    const [isSearch, setIsSearch] = React.useState(false)
    const closeSearch = (prev: boolean) =>  setIsSearch(!prev)

    const openMenu = () => setOpenMenu(true)
    const closeMenu = () => setOpenMenu(false)
    return (
        <>
            <div className='flex flex-row h-full items-center justify-between px-4 opacity-90'>
                <div className='flex items-center'>
                    <Hamburger
                        openMenu={openMenu}
                    />
                    <Link href="/" className="text-xl-semi uppercase text-white font-bold ml-4">
                        Acme my
                    </Link>
                </div>
                <div className='flex flex-row'>
                    <button
                        className='mr-4 p-1'
                        onClick={() => setIsSearch(true)}
                    >
                        <BiSearch size={22} color='white'/>
                    </button>
                    <button className='mr-4 p-1'>
                        <MdFavoriteBorder size={22} color='white'/>
                    </button>
                    <button className='p-1'>
                        <RiShoppingBagLine size={22} color='white'/>
                    </button>
                </div>
            </div>
            <MobileWrapper
                isOpen={open}
                close={closeMenu}
            />
            {isSearch && (
                <Search close={closeSearch}/>
            )}
        </>
    );
};

export default Navbar;