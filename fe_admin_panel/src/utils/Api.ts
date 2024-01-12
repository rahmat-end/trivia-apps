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
    "https://d486-2404-8000-1004-1019-8594-a2f7-c927-3a2f.ngrok-free.app/api/v1/",
});

export const apilaravel = axios.create({
  baseURL: "http://192.168.18.169:8001/api",
});