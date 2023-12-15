import {Dispatch} from "@reduxjs/toolkit";
import {store} from "@/store";
import {isExpireAccessToken} from "@/utils/jwt";
import {refresh} from "@/api/auth";
import {ILoginResponse, ILoginRequest} from "@/api/auth/types";
import {AxiosPromise} from 'axios'
import {loginStart, loginSuccess, loginFailure, logoutSuccess,loadProfileStart, loadProfileFailure, loadProfileSuccess} from "@/store/features/auth/authSlice";
import api from "@/api";

// переменная для хранения запроса токена (для избежания race condition)
let refreshTokenRequest: AxiosPromise<ILoginResponse> | null = null
export const getAccessToken = () =>
    async (dispatch: Dispatch<any>): Promise<string | null> => {
        try {
            const accessToken = store.getState().auth.authData.accessToken

            //console.log('лежит ли accessToken в store на Profile: ', accessToken && 'да', accessToken)

            if (!accessToken || isExpireAccessToken(accessToken)) {
                if (refreshTokenRequest === null) {
                    refreshTokenRequest = refresh()
                }

                const res = await refreshTokenRequest
                refreshTokenRequest = null

                dispatch(loginSuccess(res.data.accessToken))

                return res.data.accessToken
            }
            return accessToken
        } catch (e) {
            console.error(e)

            return null
        }
    }

export const loginUser = (data: ILoginRequest) =>
        async (dispatch: Dispatch<any>): Promise<void> => {
            try {
                dispatch(loginStart())

                const res = await api.auth.login(data)

                dispatch(loginSuccess(res.data.accessToken))
                dispatch(getProfile())

            } catch (e: any) {
                console.error(e)

                dispatch(loginFailure(e.message))
            }
        }

export const logoutUser = () =>
        async (dispatch: Dispatch): Promise<void> => {
            try {
                await api.auth.logout()

                dispatch(logoutSuccess())

                //history.push('/')
            } catch (e) {
                console.error(e)
            }
        }

export const getProfile = () =>
    async (dispatch: Dispatch<any>): Promise<void> => {
        try {
            dispatch(loadProfileStart())

            const res = await api.auth.getProfile()

            dispatch(loadProfileSuccess(res.data))
        } catch (e: any) {
            console.error(e)

            dispatch(loadProfileFailure(e.message))
        }
    }
