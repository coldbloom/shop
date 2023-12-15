import {getUnixTime} from "@/utils/date";
import {logoutUser} from "@/store/features/auth/actionCreators";

export interface IAuthTokenInfo {
    exp: number
    iat: number
    login: string
}

const LIFE_TIME_TO_UPDATE_MULTIPLIER = 0.5

export const isExpireAccessToken = (accessToken: string | null): boolean => {
    if (!accessToken) {
        return true
    }

    try {
        const tokenInfo = accessToken.split('.')[1]
        const tokenInfoDecoded = window.atob(tokenInfo)
        const { exp, iat }: IAuthTokenInfo = JSON.parse(tokenInfoDecoded)

        const tokenLeftTime = exp - getUnixTime()

        const minLifeTimeForUpdate = (exp - iat) * LIFE_TIME_TO_UPDATE_MULTIPLIER
        //console.log(tokenLeftTime, minLifeTimeForUpdate)
        return tokenLeftTime < minLifeTimeForUpdate
    } catch (e) {
        console.error(e)
        return true
    }
}