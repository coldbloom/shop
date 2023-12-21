import React from 'react';
import {AiOutlineFileImage} from "react-icons/ai";
import ImageCardTest from "@/components/admin/products/imageCardTest";

const sortImages = (a, b) => {
    if (a.rating > b.rating) {
        return 1
    } else {
        return -1
    }
}

const ImageUploader = ({images, setImages}) => {
    const [currentImage, setCurrentImage] = React.useState(null)
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
                        id: i,
                        rating: i,
                        name: files[i].name,
                        url: URL.createObjectURL(files[i]),
                        file: files[i],
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
                {images.sort(sortImages).map((image, index) => (
                    <ImageCardTest
                        key={index}
                        image={image}
                        index={index}
                        deleteImage={deleteImage}
                        images={images}
                        setImages={setImages}
                        currentImage={currentImage}
                        setCurrentImage={setCurrentImage}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageUploader;