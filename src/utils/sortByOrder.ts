export function sortByOrder(images: any) {
    return images.sort((a: any, b: any) => a.order - b.order);
}