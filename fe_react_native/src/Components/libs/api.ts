import axios from "axios";

export const apigolang = axios.create({
    baseURL: "https://f490-2404-8000-1004-1019-447e-d87d-c900-b80a.ngrok-free.app/api/v1",
})


export const apilaravel = axios.create({
    baseURL: `http://192.168.18.169:8001/api`,
})