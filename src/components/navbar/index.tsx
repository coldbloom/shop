import React from 'react';
import Hamburger from "@/utils/components/hamburger";
import Link from "next/link"

import { MdFavoriteBorder } from "react-icons/md";
import { RiShoppingBagLine } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
import MobileWrapper from "@/components/navbar/mobileMenu/MobileWrapper";

const Navbar = () => {
    const [open, setOpenMenu] = React.useState(false)

    const openMenu = () => setOpenMenu(true)
    const closeMenu = () => setOpenMenu(false)
    return (
        <>
            <div className='flex flex-row h-full items-center justify-between px-4'>
                <div className='flex items-center'>
                    <Hamburger
                        openMenu={openMenu}
                    />
                    <Link href="/" className="text-xl-semi uppercase text-white font-bold ml-4">
                        Acme my
                    </Link>
                </div>
                <div className='flex flex-row'>
                    <BiSearch size={22} color='white' className='mr-6'/>
                    <MdFavoriteBorder size={22} color='white' className='mr-6'/>
                    <RiShoppingBagLine size={22} color='white'/>
                </div>
            </div>
            <MobileWrapper
                isOpen={open}
                close={closeMenu}
            />
        </>
    );
};

export default Navbar;