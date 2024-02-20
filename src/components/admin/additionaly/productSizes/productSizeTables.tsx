import React from 'react';
import {ISize} from "@/types/ISize";
import {MdOutlineDelete, MdOutlineModeEdit} from "react-icons/md";
import DeleteSizeModal from "@/components/admin/additionaly/productSizes/deleteSizeModal";

type TProductSizeTablesProps = {
    title: string,
    sizes: ISize[],
    setSizes: React.Dispatch<React.SetStateAction<ISize[]>>,
}

const ProductSizeTables = ({title, sizes, setSizes}: TProductSizeTablesProps) => {
    const [sizeId, setSizeId] = React.useState<number | null>(null)
    return (
        <div className="w-full">
            <h2 className='p-10 pb-4 text-xl font-semibold text-gray-600'>{title}:</h2>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead
                    className="w-full text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr className='w-full'>
                    <th scope="col" className="px-6 py-3 text-center">
                        ID
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                        Наименование
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                        Действия
                    </th>
                </tr>
                </thead>
                <tbody>
                {sizes && sizes.map((item, idx) => (
                    <tr key={idx} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex justify-center text-center">
                            {item.id}
                        </th>
                        <th scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
                            {item.name}
                        </th>
                        <td className="px-6 py-4 flex flex-row justify-center">
                            <MdOutlineDelete
                                size={22}
                                className='cursor-pointer hover:text-black'
                                onClick={() => setSizeId(item.id)}
                            />
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            {sizeId &&
                <DeleteSizeModal
                    sizeId={sizeId}
                    close={() => setSizeId(null)}
                    setSizes={setSizes}
                />
            }
        </div>
    );
};

export default ProductSizeTables;