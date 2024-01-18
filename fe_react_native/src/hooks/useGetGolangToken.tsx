import { useMutation } from "react-query"
import { SAVE_DATA_USER_GOLANG } from "../Redux/dataUserGolangSlice"
import { SIGNIN_USER } from "../Redux/userSlice"
import { useAppSelector, useAppDispatch } from "../Redux/hooks"
import { apigolang } from "../Components/libs/api"
import { RootState } from "../Redux/store"


const useGetGolangToken = () => {
    const {user}= useAppSelector((state: RootState) => state.user)
    const dispatch = useAppDispatch();
    const data = {
        email: user.email,
        password:"roottrivia"
    }

    const { mutate: loginGolang } = useMutation(async () => {
        try {
          const res = await apigolang.post("/login", data);
          dispatch(SAVE_DATA_USER_GOLANG(res.data.data));
        //   console.log("response golang", res.data.data);
        } catch (error) {
          console.log("response golang", error.response.data);
        } 
      });
  return{
    loginGolang
  }
}

export default useGetGolangToken

