import { authConstants, cartConstants, userConstants } from "./constants";
import axios from "../helpers/axios";

// new update signup action
export const signup_user = (user) => {
  return async (dispatch) => {

      dispatch({ type: userConstants.USER_REGISTER_REQUEST });
      const res = await axios.post('/user/register', { ...user });

      if (res.status === 200) {
        const { message } = res.data;
        dispatch({ 
          type: userConstants.USER_REGISTER_SUCCESS,
          payload: {message}
        });

      } else {
        const { error } = res.data;
        dispatch({ type: userConstants.USER_REGISTER_FAILURE, payload: { error } });
      }

      // const { data } = error.response;
      // dispatch({
      //   type: userConstants.SIGNUP_FAILURE,
      //   payload: { error: data.error },
      // });
  };
};

export const login_user = (user) => {
  return async (dispatch) => {
    dispatch({ type: authConstants.LOGIN_REQUEST });
    const res = await axios.post(`/user/login`, {
      ...user,
    });
    console.log(user)
    if (res.status === 200) {
      const { token, user } = res.data;
      
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
    } else {
      if (res.status === 400) {
        dispatch({
          type: authConstants.LOGIN_FAILURE,
          payload: { error: res.data.error },
        });
      }
    }
  };
};

// export const isUserLoggedIn = () => {
//   return async (dispatch) => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       const user = JSON.parse(localStorage.getItem("user"));
//       dispatch({
//         type: authConstants.LOGIN_SUCCESS,
//         payload: {
//           token,
//           user,
//         },
//       });
//     } else {
//       dispatch({
//         type: authConstants.LOGIN_FAILURE,
//         payload: { error: "Failed to login" },
//       });
//     }
//   };
// };

// export const signout_user = () => {
//   return async (dispatch) => {
//     dispatch({ type: authConstants.LOGOUT_REQUEST });
//     // localStorage.removeItem('user');
//     // localStorage.removeItem('token');
//     localStorage.clear();
//     dispatch({ type: authConstants.LOGOUT_SUCCESS });
//     dispatch({ type: cartConstants.RESET_CART });
//     //const res = await axios.post(`/admin/signout`);
//     // if(res.status === 200){

//     // }else{
//     //     dispatch({
//     //         type: authConstants.LOGOUT_FAILURE,
//     //         payload: { error: res.data.error }
//     //     });
//     // }
//   };
// };