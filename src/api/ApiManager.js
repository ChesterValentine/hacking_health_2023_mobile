import axios from "axios";

const ApiManager = axios.create({
    baseURL:"http://diagvoyage.ci76.fr/api",
    responseType: "json",
});

export default ApiManager;