import { useEffect} from "react"
import { useSelector } from "react-redux";
import { RootState, getUserByAccessTokenThunk, useAppDispatch } from "store";


export const useAuth = () => {
    const {accessToken, userLogin} = useSelector((state: RootState) => state.quanLyNguoiDung);
    const dispatch = useAppDispatch();
    console.log("user" , !userLogin);

    useEffect(() => {
        !userLogin &&  dispatch(getUserByAccessTokenThunk())
    }, []);
    
    return {
        accessToken,
        user : userLogin
    }
}