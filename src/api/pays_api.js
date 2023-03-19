import { AxiosError } from "axios";
import ApiManager from "./ApiManager";

export const get_pays = async (data) => {
    try {
        const result = await ApiManager("/pays.json", {
            method: "GET",
            headers: {
                'content-type': 'application/json'
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