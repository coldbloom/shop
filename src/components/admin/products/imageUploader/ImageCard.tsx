import React from 'react';
import Image from "next/image";
import {MdDeleteOutline} from "react-icons/md";

function textAbbreviation (text: string): string {
    if (text.length > 25) {
        return text.slice(0, 25) + '...'
    }
    return text
}

function correctOrderImages(imagesClone: any[]) {
    return imagesClone.map((image, index) => {
        return {
            ...image,
            order: index + 1
        }
    })
}


const ImageCard = ({image, index, images, setImages, dragImage, draggedOverImage}) => {
    function deleteImage(index: number) {
        setImages((prevImages) =>
            prevImages.filter((_, i) => i !== index)
        )
    }

    function handleSort() {
        console.log(`dragImage = ${dragImage.current}, draggedOverImage = ${draggedOverImage.current}`)
        const imagesClone = [...images]
        const temp = imagesClone[dragImage.current]
        imagesClone[dragImage.current] = imagesClone[draggedOverImage.current]
        imagesClone[draggedOverImage.current] = temp
        setImages(correctOrderImages(imagesClone))
    }

    return (
        <div
            className='imageContainer flex flex-row items-center justify-between my-3 bg-gray-100 rounded-lg cursor-grab'
            draggable={true}
            onDragStart={() => (dragImage.current = index)}
            onDragEnter={() => (draggedOverImage.current = index)}
            onDragEnd={handleSort}
            onDragOver={(e) => e.preventDefault()}
        >
            <Image
                src={image.path}
                alt={image.name}
                width={50}
                height={50}
                className='rounded-lg'
            />
            <p className='text-ellipsis'>
                {textAbbreviation(image.name)}
            </p>
            <MdDeleteOutline
                size={22}
                className='cursor-pointer mr-4'
                onClick={() => deleteImage(index)}
            />
        </div>
    );
};

export default ImageCard;