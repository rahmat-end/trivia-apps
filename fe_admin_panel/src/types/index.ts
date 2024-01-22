/** @format */

// AUTH
export type RegisterType = {
  name: string;
  email: string;
  password: string;
};

export type LoginType = {
  email: string;
  password: string;
};
// AUTH

// DIAMOND
export type AddDiamondType = {
  amount_diamond: number;
  price_diamond: number;
  photo_diamond: File | null;
};

// Buy Avatar
export type UseBuyAvatar = {
  photo_buyavatar: File | null;
  price_buyavatar: number;
};
