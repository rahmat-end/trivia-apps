
import { useQuery } from "react-query"
import { apigolang } from "../Components/libs/api"
import { useAppSelector } from "../Redux/hooks"
import { RootState } from "../Redux/store"

const useQuestion = () => {
    const {dataUser} = useAppSelector((state: RootState) => state.dataUser)

    const {data: dataQuestion, isLoading: isLoadingQuestion, refetch: refetchQuestion } = useQuery('question', async () => {
        try {
            const headers = {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${dataUser?.token}`,
            }
            const response = await apigolang.get('/questions', { headers })
        console.log(response.data.data)
        return response.data.data
        } catch (err) {
            console.log(err)
        }
    })


  return {

    dataQuestion
  }
}

export default useQuestion
