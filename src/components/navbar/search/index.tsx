import React from 'react';
import FullScreenModal from "@/utils/components/fullScreenModal";
import {BiSearch} from "react-icons/bi";

type SearchProps = {
    close: () => void
}
const Search = ({close}: SearchProps) => {
    return (
        <FullScreenModal close={close}>
            <div className='px-5 pt-5'>
                <div className='w-full flex items-center gap-x-2 p-4 bg-[rgba(3,7,18,0.5)] backdrop-blur-2xl rounded-md'>
                    <BiSearch />
                    <input
                        className='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        type="text"
                    />
                </div>
            </div>
        </FullScreenModal>
    );
};

export default Search;