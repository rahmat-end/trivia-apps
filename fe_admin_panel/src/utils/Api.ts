/** @format */

// api.ts
const BASE_URL = "http://192.168.18.182:8001/api";

export const api = {
  async deletePlayer(playerNo: number) {
    const response = await fetch(`${BASE_URL}/players/${playerNo}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Failed to delete player with number ${playerNo}`);
    }
  },
};


import axios from "axios";

export const apigolang = axios.create({
  baseURL:
    "https://3f3d-2001-448a-2082-90a7-34ff-fae-467d-eeec.ngrok-free.app/api/v1",
});

export const apilaravel = axios.create({
  baseURL: "http://192.168.18.169:8001/api",
});