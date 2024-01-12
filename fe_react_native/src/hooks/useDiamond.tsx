import { useQuery, useMutation } from 'react-query'
import { apilaravel, apigolang } from '../Components/libs/api'



const useDiamond = () => {
const {data:dataDiamond } = useQuery('diamond', async () => {
    try {
        const headers = {
            'Content-Type': 'application/json',
            // Authorization: `Bearer ${dataUser?.token}`,
        }
        const response = await apigolang.get("/diamonds", { headers })
        console.log(response.data.data)
        return response.data.data
    } catch (error) {
        console.log(error)
    }
})


const {mutate:buydiamond} = useMutation(async(id:any)=>{
  try {
    const response = await apigolang.post(`/transaction/${id}`)
    console.log(response.data)
    return response.data
  } catch (error) {
   console.log(error) 
  }
})
  return {
    dataDiamond,
    buydiamond
  }
}

export default useDiamond

