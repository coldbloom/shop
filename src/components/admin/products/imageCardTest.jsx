import React from 'react';
import Image from "next/image";
import {MdDeleteOutline} from "react-icons/md";

function textAbbreviation (text){
    if (text.length > 25) {
        return text.slice(0, 25) + '...'
    }
    return text
}

const ImageCardTest = ({image, index, deleteImage, images, setImages, currentImage, setCurrentImage}) => {
    function dragStartHandler(e, image) {
        setCurrentImage(image)

    }

    function dragLeaveHandler(e) {
        e.target.style.background = 'rgb(243 244 246)'
    }

    function dragEndHandler(e) {
        e.target.style.background = 'rgb(243 244 246)'
    }

    function dragOverHandler(e) {
        e.preventDefault();
        e.target.style.background = 'gray'
    }

    function dropHandler(e, image) {
        e.preventDefault()
        setImages(images.map(item => {
            if (item.id === image.id) {
                return {...item, rating: currentImage.rating}
            }
            if (item.id === currentImage.id) {
                return {...item, rating: image.rating}
            }
            return item
        }))
        e.target.style.background = 'rgb(243 244 246)'
    }

    return (
        <div className='imageContainer flex flex-row items-center justify-between my-3 bg-gray-100 rounded-lg cursor-grab'
             draggable={true}
             onDragStart={(e) => dragStartHandler(e, image)}
             onDragLeave={(e) => dragLeaveHandler(e)}
             onDragEnd={(e) => dragEndHandler(e)}
             onDragOver={(e) => dragOverHandler(e)}
             onDrop={(e) => dropHandler(e, image)}
        >
            <Image
                src={image.url}
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
                className='cursor-pointer'
                onClick={() => deleteImage(index)}
            />
        </div>
    );
};

export default ImageCardTest;