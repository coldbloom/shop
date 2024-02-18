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
    const [accordion, setAccordion] = React.useState<number>(0)

    const handleAccordion = (id: number) => {
        if (accordion === id) {
            setAccordion(0)
        } else {
            setAccordion(id)
        }
    }

    React.useEffect(() => {
        console.log(`Текущий nav: ${currentNav}`)
        console.log(`Текущий акордион: ${accordion}`)
    }, [accordion, currentNav])
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
                    title={'Дополнительно'}
                    id={3}
                    accordion={accordion}
                    handleOpen={handleAccordion}
                >
                    <>
                        <NavButton
                            id={3}
                            currentNav={currentNav}
                            setNav={setNav}
                            title='Типы'
                        />
                        <NavButton
                            id={4}
                            currentNav={currentNav}
                            setNav={setNav}
                            title='Бренды'
                        />
                        <NavButton
                            id={5}
                            currentNav={currentNav}
                            setNav={setNav}
                            title='Размеры'
                        />
                        <NavButton
                            id={6}
                            currentNav={currentNav}
                            setNav={setNav}
                            title={'Категории'}
                        />
                    </>
                </Accordion>

                <li className='py-1'>
                    <NavButton
                        id={7}
                        currentNav={currentNav}
                        setNav={() => {
                            setNav(7);
                            handleAccordion(0);
                        }}
                        title='Заказы'
                        isImageArrow={false}
                        classProp='pl-0'
                    />
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;