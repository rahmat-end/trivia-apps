
import React from 'react'
import {  apigolang, apilaravel } from '../Components/libs/api'
import { useQuery } from 'react-query'
import { useAppSelector, useAppDispatch } from '../Redux/hooks'
import { RootState } from '../Redux/store'
import { SIGNIN_USER } from '../Redux/userSlice'


const useUser = () => {
    const {dataUser} = useAppSelector((state: RootState) => state.dataUser)
    const dispatch = useAppDispatch()
    const {data:userlogin, isLoading: isLoadingUserLogin, refetch: refetchUserlogin } = useQuery('user', async () => {
        try {
            const headers = {
                'Content-Type': 'application/json',
                // Authorization: `Bearer ${dataUser?.token}`,
            }
            const response = await apigolang.get(
               `user/${dataUser?.userid}`,
                { headers }
            )
            // console.log("ini response data userbyid",response.data.data)
            dispatch(SIGNIN_USER(response.data.data))
            return response.data.data
        } catch (error) {
            console.log("ini error get userby id",error)
            // console.log("ini error get userby id",error.message)
        }
    })

  return {
    userlogin, isLoadingUserLogin, refetchUserlogin
  }
}
export default useUser
