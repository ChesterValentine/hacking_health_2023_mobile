import { AxiosError } from "axios";
import ApiManager from "./ApiManager";

export const get_pays = async () => {
    try {
        const result = await ApiManager("/pays.json", {
            method: "GET",
            headers: {
                'content-type': 'application/json'
            },
            accept: 'application/json'
        })
        return result;
    } catch (error) {
        console.log(error)
        return error.response.data
    }
}

export const get_pays_by_id = async (id) => {
    console.log(id)
    try {
        const result = await ApiManager('/pays/' + id + '.json', {
            method: "GET",
            headers: {
                'content-type': 'application/json'
            },
            accept: 'application/json'
        })
        return result;
    } catch (error) {
        console.log(error)
        return error.response.data
    }
}