import { useState } from "react";
import useNotification from "./useNotification";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useRegisterMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";

const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const { onNotify } = useNotification();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [register] = useRegisterMutation();

  // function to call for registration
  const onRegister = async (request) => {
    setLoading(true);
    try {
      const response = await register(request).unwrap();

      setLoading(false);

      console.log(response);

      if (response.responseCode === "00") {
        onNotify("success", "Successful", response?.responseMessage);

        dispatch(setCredentials(response.data));

        setTimeout(() => {
          return navigate("/dashboard");
        }, 2000);
      } else {
        onNotify("error", "Error occured", response?.responseMessage);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      onNotify("error", "Error occured", error.responseMessage);
    }
  };

  return {
    onRegister,
    loading,
  };
};

export default useRegister;
