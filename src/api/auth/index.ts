import {AxiosInstance, AxiosPromise} from "axios";
import {ILoginRequest, ILoginResponse} from "@/api/auth/types";
import {axiosInstance} from "@/api/instance";
import Endpoints from "@/api/endpoints";

export const login = (params: ILoginRequest): AxiosPromise<ILoginResponse> =>
    axiosInstance.post(Endpoints.AUTH.LOGIN, params)

export const logout = (): AxiosPromise<ILoginResponse> =>
    axiosInstance.get(Endpoints.AUTH.LOGOUT)

export const refresh = (): AxiosPromise<ILoginResponse> =>
    axiosInstance.get(Endpoints.AUTH.REFRESH)

export const getProfile = (): AxiosPromise<string> =>
    axiosInstance.get(Endpoints.AUTH.PROFILE)