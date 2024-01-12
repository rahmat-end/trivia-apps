
import React from 'react'
import {  apilaravel } from '../Components/libs/api'
import { useQuery } from 'react-query'
import { useAppSelector } from '../Redux/hooks'
import { RootState } from '../Redux/store'


const useUser = () => {
    const {dataUser} = useAppSelector((state: RootState) => state.dataUser)
    const {data:userlogin, isLoading: isLoadingUserLogin } = useQuery('user', async () => {
        try {
            const headers = {
                'Content-Type': 'application/json',
                // Authorization: `Bearer ${dataUser?.token}`,
            }
            const response = await apilaravel.get(
               `user/${dataUser?.userid}`,
                { headers }
            )
            console.log("ini response data userbyid",response.data)
            return response.data
        } catch (error) {
            console.log("ini error get userby id",error)
            console.log("ini error get userby id",error.message)
        }
    })

  return {
    userlogin, isLoadingUserLogin
  }
}
export default useUser
