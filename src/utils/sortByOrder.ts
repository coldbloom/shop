import {IImage} from "@/api/product/types";

export function sortByOrder(images: IImage[]) {
    return images.sort((a: any, b: any) => a.order - b.order);
}