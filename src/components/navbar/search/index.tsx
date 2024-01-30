import React from 'react';
import FullScreenModal from "@/utils/components/fullScreenModal";
import {BiSearch} from "react-icons/bi";
import { BiX } from "react-icons/bi";

type SearchProps = {
    close: () => void
}
const Search = ({close}: SearchProps) => {
    const [search, setSearch] = React.useState<string>('')
    const inputRef = React.useRef<HTMLInputElement>(null)

    React.useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()
        }

        return () => {
            inputRef.current && inputRef.current.blur()
        }
    })

    return (
        <FullScreenModal close={close}>
            <div className='px-5 pt-5 flex items-center'>
                <div className='w-full flex items-center gap-x-2 p-4 bg-[rgba(3,7,18,0.5)] backdrop-blur-2xl rounded-md'>
                    <div className='w-fit'>
                        <BiSearch color={'white'} size={20}/>
                    </div>
                    <input
                        ref={inputRef}
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        className='w-full bg-transparent text-white ml-2'
                        type="text"
                    />
                    {search.length !== 0 && (
                        <button className='w-fit'
                            onClick={() => setSearch('')}
                        >
                            <BiX color={'white'} size={24} viewbox={'0 0 100% 100%'}/>
                        </button>
                    )}
                </div>
            </div>
        </FullScreenModal>
    );
};

export default Search;