import React from 'react';
import {classNames} from "@/utils/classNames";
import {INavigation} from "@/components/admin/home/index";
import Accordion from "@/utils/components/accordion";
import { IoIosArrowForward } from "react-icons/io";
import NavButton from "@/components/admin/home/navButton";

type TSidebarProps = {
    currentNav: number,
    setNav: (id: number) => void,
}

const Sidebar = ({currentNav, setNav}: TSidebarProps) => {
    const [accordion, setAccordion] = React.useState<number | null>(0)

    const handleAccordion = (id: number) => {
        if (accordion === id) {
            setAccordion(null)
        } else {
            setAccordion(id)
        }
    }
    return (
        <div className='w-[250px] h-screen bg-indigo-600 p-4 pt-6 fixed'>
            <div className="flex flex-row pb-6">
                <img
                    className="h-8 w-8 text-white"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                />
                <p className='text-xl font-bold align-bottom pl-2 text-indigo-500'>Administration</p>
            </div>
            <ul>
                <Accordion
                    title={'Товары'}
                    id={1}
                    accordion={accordion}
                    handleOpen={handleAccordion}
                >
                    <>
                        <NavButton
                            id={1}
                            currentNav={currentNav}
                            setNav={setNav}
                            title='Создать товар'
                        />
                        <NavButton
                            id={2}
                            currentNav={currentNav}
                            setNav={setNav}
                            title='Все товары'
                        />
                    </>
                </Accordion>
                <Accordion
                    title={'Категории'}
                    id={2}
                    accordion={accordion}
                    handleOpen={handleAccordion}
                >
                    <>
                        <NavButton
                            id={3}
                            currentNav={currentNav}
                            setNav={setNav}
                            title='Создать категорию'
                        />
                        <NavButton
                            id={4}
                            currentNav={currentNav}
                            setNav={setNav}
                            title='Все категории'
                        />
                    </>
                </Accordion>

                <li className='py-1'>
                    <button onClick={() => {
                        setAccordion(3)
                        setNav(5)
                    }}
                        className={classNames(
                        accordion === 3
                            ? 'bg-indigo-700 text-white'
                            : 'text-gray-300 hover:bg-indigo-700 hover:text-white',
                        'rounded-md px-3 py-2 font-medium my-2 first:my-0 w-full flex flex-row justify-between items-center')}
                    >Заказы</button>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;