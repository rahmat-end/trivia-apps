import axios from "axios";

export const apigolang = axios.create({
    baseURL: "https://3f3d-2001-448a-2082-90a7-34ff-fae-467d-eeec.ngrok-free.app/api/v1",
})


export const apilaravel = axios.create({
    baseURL: `http://192.168.18.169:8001/api`,
})