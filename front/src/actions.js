import axios from "axios";
import { AsyncStorage } from "react-native";

export const initApp = ({}) => {
  return dispatch => {
    dispatch({ type: "app_start" });

    async () => {};
  };
};

export const signUp = ({ id, pass }) => {
  return dispatch => {
    dispatch({ type: "signup_start" });

    axios
      .post("https://api-kimnity.herokuapp.com/api/auth", {
        email: id,
        password: pass
      })
      .then(async response => {
        await AsyncStorage.multiSet([
          ["access-token", response.headers["access-token"]],
          ["client", response.headers.client],
          ["uid", response.headers.uid]
        ]);
      })
      .catch(e => {
        console.log(e);
      });
  }
};

export const signIn = ({ id, pass }) => {
  return dispatch => {
    dispatch({ type: "signin_start" });

    axios
      .post("https://api-kimnity.herokuapp.com/api/auth/sign_in", {
        email: id,
        password: pass
      })
      .then(async response => {
        // this.props.signIn({ response.data.data })
        // this.props.navigation.navigate("App");
        dispatch({
          type: "signin_success",
          payload: {
            image: response.data.data.image,
            name: response.data.data.name
          }
        });
        dispatch({ type: "signin_end" });
        console.log("signin");
        await AsyncStorage.multiSet([
          ["access-token", response.headers["access-token"]],
          ["client", response.headers.client],
          ["uid", response.headers.uid]
        ]);
      })
      .catch(e => {
        console.log(e);
      });
  };
};

export const editProfile = ({ name, image }) => {
  console.log(name, 7654)
  return async dispatch => {
    console.log(name, 238972)
    dispatch({ type: "editProfile_start" });
    const headers = await AsyncStorage.multiGet([
      "access-token",
      "client",
      "uid"
    ]);
    console.log(headers);
    axios
      .put(
        "https://api-kimnity.herokuapp.com/api/auth",
        {
          name: name
        },
        {
          headers: {
            "access-token": headers[0][1],
            client: headers[1][1],
            uid: headers[2][1]
          }
        }
      )
      .then(response => {
        console.log("success");
        dispatch({
          type: "editProfile_success",
          payload: {
            image: response.data.data.image,
            name: response.data.data.name
          }
        });
      })
      .catch(e => {
        console.log(e);
      });
  };
};
