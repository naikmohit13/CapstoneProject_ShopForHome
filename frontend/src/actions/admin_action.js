import { authConstants, adminContants } from "./constants";
import Axios from "../helpers/axios";

export const signup = (user) => {

    console.log(user)

    return async (dispatch) => {

        dispatch({ type: adminContants.ADMIN_REGISTER_REQUEST });
        const res = await Axios.post("/admin/register", {
            ...user
        });

        if(res.status === 200){
            const { message } = res.data;
            dispatch({
                type: adminContants.ADMIN_REGISTER_SUCCESS,
                payload: {message}
            });
        }else{
            if(res.status === 400){
                dispatch({
                    type: adminContants.ADMIN_REGISTER_FAILURE,
                    payload: { error: res.data.error }
                });
            }
        }
    }
}