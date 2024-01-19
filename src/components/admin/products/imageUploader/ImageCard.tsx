import React from 'react';
import Image from "next/image";
import {MdDeleteOutline} from "react-icons/md";
import {IImage} from "@/api/product/types"

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

type ImageCardProps = {
    images: IImage[],
    setImages: React.Dispatch<React.SetStateAction<IImage[]>>,
    image: IImage,
    index: number,
    dragImage:  React.MutableRefObject<number>,
    draggedOverImage:  React.MutableRefObject<number>,
}


const ImageCard = ({image, index, images, setImages, dragImage, draggedOverImage}: ImageCardProps) => {
    function deleteImage(index: number) {
        setImages((prevImages: IImage[]) =>
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
            {image.name && (
                <>
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
                </>
            )}
        </div>
    );
};

export default ImageCard;