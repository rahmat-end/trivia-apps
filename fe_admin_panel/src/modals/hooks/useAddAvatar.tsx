/** @format */

import React from "react";
import { useState, useEffect } from "react";
import { useMutation } from "react-query";
import axios from "axios";

type AddAvatarModal = {
  photo_freeavatar: File | null;
};

export const useAddAvatar = () => {
  const [dataAvatar, setDataAvatar] = useState<AddAvatarModal>({
    photo_freeavatar: null,
  });

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const {name, files} = event.target;

  console.log(files)
  setDataAvatar({
    ...dataAvatar,
    [name]: files? files[0] : null,
  })
}

 const {mutate:handleSubmit} = useMutation( async () => {
  try {
    const data = new FormData()
    data.append("photo_freeavatar", dataAvatar.photo_freeavatar as File);
    const res = await axios.post("http://127.0.0.1:8001/api/freeavatar/", data);
    console.log(res)
  } catch (error) {
    console.log(error)  
  }
   
 })

    
  
  return { dataAvatar, handleChange, handleSubmit };
  
};
