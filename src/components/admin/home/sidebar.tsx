import React from 'react';
import {classNames} from "@/utils/classNames";
import {INavigation} from "@/components/admin/home/index";
import Accordion from "@/utils/components/accordion";

const Sidebar = ({navigation, currentNav, setNav}: {navigation: INavigation[], currentNav: number, setNav: (id: number) => void}) => {
    const [open, setOpen] = React.useState(false)
    return (
        <div className='w-[250px] h-screen bg-indigo-600 p-4 pt-6'>
            <div className="flex flex-row pb-6">
                <img
                    className="h-8 w-8 text-white"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                />
                <p className='text-xl font-bold align-bottom pl-2 text-indigo-500'>Administration</p>
            </div>
            <ul>
                {/*{navigation.map((item: INavigation) => (*/}
                {/*    <li*/}
                {/*        key={item.id}*/}
                {/*        className={classNames(*/}
                {/*            currentNav === item.id*/}
                {/*                ? 'bg-indigo-700 text-white'*/}
                {/*                : 'text-gray-300 hover:bg-indigo-700 hover:text-white',*/}
                {/*            'rounded-md px-3 py-2 font-medium my-2 first:my-0'*/}
                {/*        )}*/}
                {/*        onClick={() => setNav(item.id)}*/}
                {/*    >*/}
                {/*        {item.name}*/}
                {/*    </li>*/}
                {/*))}*/}

                <Accordion title={'Товары'}>
                    <>
                        <button>Создание нового товара</button>
                        <button>Редактирование товара</button>
                    </>
                </Accordion>

                <li>
                    <button>Заказы</button>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;