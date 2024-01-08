// export function equalArrayOfObjects(array1: any[], array2: any[]) {
//     if (!Array.isArray(array1) && !Array.isArray(array2)) {
//         throw new Error('Аргументы функции equalArrayOfObjects должны быть массивами')
//     }
//
//     if (array1.length !== array2.length) {
//         return false;
//     }
//
//     for (let i = 0; i < array1.length; i++) {
//         if (!equalObjects(array1[i], array2[i])) {
//             return false;
//         }
//     }
//
//     return true;
// }
//
// const equalObjects = (object1: any, object2: any) => {
//     const keysOfObject1 = Object.keys(object1)
//     const keysOfObject2 = Object.keys(object2)
//
//     if (keysOfObject1.length !== keysOfObject2.length) {
//         return false;
//     }
//
//     for (let i = 0; i < keysOfObject1.length; i++) {
//         if (keysOfObject1[i] !== keysOfObject2[i]) {
//             return false;
//         }
//     }
//
//     return true;
// }

export function equalArrayOfObjects(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        const obj1 = arr1[i];
        const obj2 = arr2[i];
        if (!objectsAreEqual(obj1, obj2)) {
            return false;
        }
    }

    return true;
}

function objectsAreEqual(obj1, obj2) {
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);

    if (obj1Keys.length !== obj2Keys.length) {
        return false;
    }

    for (let key of obj1Keys) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;
}
