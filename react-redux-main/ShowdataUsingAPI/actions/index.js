import axios from "axios";

export const loggedIn = () => {
  return { type: "SIGN_IN" };
};
export const addUserAsync = (user) => {
  return async (dipatch) => {
    const response = await axios({
      method: "POST",
      data: {
        email: user.email,
        password: user.password,
      },
      withCredentials: true,
      url: "http://localhost:3001/api/users/login",
    }).then((res) => {
      if (res.status === 201) {
        loggedIn();
      }
      return res;
    });
    console.log(response.data);
    dipatch({
      type: "ADD_USER",
      payload: response.data,
    });
  };
};
