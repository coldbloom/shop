import axios from "axios";
import Endpoints from "@/api/endpoints";
import {ICategoryResponse, ICategoryRequest} from "./types";
import {axiosInstance} from "@/api/instance";

export const getAllCategories = () =>
    axios
        .get<ICategoryResponse[]>(Endpoints.PUBLIC.CATEGORY)
        .then((res) => res.data)

export const addNewCategory = (data: ICategoryRequest) =>
    axiosInstance
        .post(Endpoints.PUBLIC.CATEGORY, data)
        .then((res) => res.data)