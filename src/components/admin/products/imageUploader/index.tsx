import React from 'react';
import {IImage} from "@/components/admin/products/newProductModal";
import {AiOutlineFileImage} from "react-icons/ai";
import ImageCard from "./ImageCard";
import {sortByOrder} from "@/utils/sortByOrder"

type ImageUploaderProps = {
    images: IImage[],
    setImages: (images: IImage[]) => void,
}

const ImageUploader = ({images, setImages}): ImageUploaderProps => {
    const fileInputRef = React.useRef(null);

    const dragImage = React.useRef<number>(0)
    const draggedOverImage = React.useRef<number>(0)

    function selectFiles() {
        fileInputRef.current.click();
    }

    function onFileSelect(event) {
        const files = event.target.files;
        if (files.length === 0) return;
        for (let i = 0; i < files.length; i++) {
            if (files[i].type.split('/')[0] !== 'image') continue;
            if (!images.some((e) => e.name === files[i].name)) {
                setImages((prevImages) => [
                    ...prevImages,
                    {
                        id: i,
                        order: prevImages.length + 1,
                        name: files[i].name,
                        path: URL.createObjectURL(files[i]),
                        file: files[i],
                    },
                ]);
            }
        }
    }

    return (
        <>
            <div
                className='w-full border-dashed border-2 rounded-lg cursor-pointer text-center flex flex-col items-center py-6'
                onClick={selectFiles}
            >
                <AiOutlineFileImage size={30} className='mb-1'/>
                <p className='text-gray-900 text-sm font-medium'>
                    Загруить изображение товара
                </p>
                <input className='p-2 bg-amber-300 hidden'
                       name='file'
                       type="file"
                       accept='image/*'
                       multiple
                       ref={fileInputRef}
                       onChange={onFileSelect}
                />
            </div>

            <div className='container'>
                {
                    sortByOrder(images).map((image, index) => (
                        <ImageCard
                            key={index}
                            image={image}
                            index={index}
                            images={images}
                            setImages={setImages}
                            dragImage={dragImage}
                            draggedOverImage={draggedOverImage}
                        />
                    ))
                }
            </div>
        </>
    );
};

export default ImageUploader;