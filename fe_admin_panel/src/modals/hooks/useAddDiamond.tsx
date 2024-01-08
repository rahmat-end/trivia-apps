import React from 'react'
import { useState } from 'react'

type AddDiamond  = {
    amount: number
    price: number
}

export const useAddDiamond = () => {
  const [dataDiamond, setDataDiamond] = useState <AddDiamond>({ 
    amount: 0,
    price: 0
      
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
      setDataDiamond( {
        ...dataDiamond,
        [name]: value
      })

      console.log(dataDiamond);
      
  }
  return { dataDiamond, handleChange }
}
