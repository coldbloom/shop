import {ICategoryResponse} from "@/api/category/types";

export const genders = [
    { id: 0, name: 'женщина' },
    { id: 1, name: 'мужчина' },
]

export interface IGender {
    id: number,
    name: string
}

export type TFormData = {
    name: { value: string, isValid: boolean },
    price: string,
    category: null | ICategoryResponse,
    gender: null | IGender,
    brand: string,
    about: string,
}