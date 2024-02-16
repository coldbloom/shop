import React from 'react';
import {IBrand} from "@/types/IBrand";
import {MdOutlineDelete, MdOutlineModeEdit} from "react-icons/md";
import EditCategoryModal from "@/components/admin/categories/editCategoryModal";
import DeleteCategoryModal from "@/components/admin/categories/deleteCategoryModal";
import {ICategoryResponse} from "@/api/category/types";
import DeleteBrandsModal from "@/components/admin/additionaly/productBrands/deleteBrandsModal";
import EditBrandsModal from "@/components/admin/additionaly/productBrands/editBrandsModal";

type BrandsTableProps = {
    brands: IBrand[],
    setBrands: React.Dispatch<React.SetStateAction<IBrand[]>>
}

interface IEditModal {open: boolean, id: number | null, newName: string}
interface IDelModal {open: boolean, id: number | null }
const BrandsTable = ({brands, setBrands}: BrandsTableProps) => {
    const [editModal, setEditModal] = React.useState<IEditModal>({ open: false, newName: '', id: null})
    const [delModal, setDelModal] = React.useState<IDelModal>({ open: false, id: null })

    const closeEditModal = () => {
        setEditModal({...editModal, open: false})
    }
    const closeDelModal = () => {
        setDelModal({...delModal, open: false})
    }
    const openEditModal = (item: ICategoryResponse) => {
        setEditModal({
            id: item.id,
            newName: item.name,
            open: true,
        })
    }
    const openDelModal = (categoryId: number) => {
        setDelModal({
            open: true,
            id: categoryId
        })
    }


    return (
        <div className="w-full">
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
                {brands && brands.map((item, idx) => (
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
                            <MdOutlineModeEdit
                                size={22}
                                className='cursor-pointer mr-6 hover:text-black'
                                onClick={() => openEditModal(item)}
                            />
                            <MdOutlineDelete
                                size={22}
                                className='cursor-pointer hover:text-black'
                                onClick={() => openDelModal(item.id)}
                            />
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            { editModal.open &&
                <EditBrandsModal
                    id={editModal.id}
                    close={closeEditModal}
                    setBrands={setBrands}
                    name={editModal.newName}
                />
            }
            { delModal.open &&
                <DeleteBrandsModal
                    id={delModal.id}
                    close={closeDelModal}
                    setBrands={setBrands}
                />
            }
        </div>
    );
};

export default BrandsTable;