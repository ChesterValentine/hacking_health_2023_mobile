import { AxiosError } from "axios";
import ApiManager from "./ApiManager";

export const user_login = async (data) => {
    try {
        const result = await ApiManager("/auth/login", {
            method: "POST",
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            data: data,
            accept: 'application/json'
        })
        return result;
    } catch (error) {
        console.log(error)
        return error.response.data
    }
}