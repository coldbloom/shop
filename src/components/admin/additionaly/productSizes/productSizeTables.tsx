import React from 'react';
import {ISize} from "@/types/ISize";

type TProductSizeTablesProps = {
    sizes: ISize[],
}

const preparationSizes = (sizes: ISize[]) => {
    console.log(sizes)
}
const ProductSizeTables = ({sizes}: TProductSizeTablesProps) => {
    return (
        <div>
            
        </div>
    );
};

export default ProductSizeTables;