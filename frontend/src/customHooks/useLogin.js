import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../slices/usersApiSlice"; // Import RTK Query hook
import { useDispatch } from "react-redux";
import { setCredentials } from "../slices/authSlice"; // Redux action
import useNotification from "./useNotification";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { onNotify } = useNotification();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login] = useLoginMutation(); // RTK Query mutation

  const onLogin = async (request) => {
    setLoading(true);
    try {
      const response = await login(request).unwrap();
      setLoading(false);

      if (response?.responseCode === "00") {
        onNotify("success", "Successful", response?.responseMessage);

        dispatch(setCredentials(response.data)); // Set user credentials in Redux store
        setTimeout(() => {
          navigate("/", { replace: true });
        }, 2000);
      } else {
        console.log(response);
        onNotify("error", "Error occurred", response?.data?.responseMessage);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      onNotify(
        "error",
        "Error occurred",
        error?.data?.responseMessage || error.error
      );
    }
  };

  return {
    onLogin,
    loading,
  };
};

export default useLogin;
