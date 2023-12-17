import React from 'react';
import Image from "next/image"
import {AiOutlineFileImage} from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";

function textAbbreviation (text){
    if (text.length > 25) {
        return text.slice(0, 25) + '...'
    }
    return text
}

const ImageUploader = () => {
    const [images, setImages] = React.useState([]);
    const [isDragging, setIsDragging] = React.useState(false);
    const fileInputRef = React.useRef(null);

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
                        name: files[i].name,
                        url: URL.createObjectURL(files[i]),
                    },
                ]);
            }
        }
    }

    function deleteImage(index) {
        setImages((prevImages) =>
            prevImages.filter((_, i) => i !== index)
        )
    }

    return (
        <div>

            <div className='w-full border-dashed border-2 rounded-lg cursor-pointer text-center flex flex-col items-center py-6'
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
                {images.map((image, index) => (
                    <div className='flex flex-row items-center justify-between'
                         key={index}>
                        <Image
                            src={image.url}
                            alt={image.name}
                            width={50}
                            height={50}
                        />
                        <p className='text-ellipsis'>
                            {textAbbreviation(image.name)}
                        </p>
                        <MdDeleteOutline
                            size={22}
                            className='cursor-pointer'
                            onClick={() => deleteImage(index)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageUploader;