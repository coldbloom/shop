import React from 'react';

interface IImage {
    id: number,
    order: number,
    path: string
}

type ImageEdit = {
    images: IImage[]
}
const ImageEdit = ({images}): ImageEdit => {
    return (
        <div>

        </div>
    );
};

export default ImageEdit;