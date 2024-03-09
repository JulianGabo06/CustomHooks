import { useState } from "react";

const useRegister = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("initialState");
  const [showSuccess, setShowSuccess] = useState(false);

  const register = () => {
    if (!username || !password) {
      setError("Complete todos los campos");
      console.log("error");
      return;
    }
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    setShowSuccess(true);
  };
  const closeSuccess = () => {
    setShowSuccess(false);
  };

  return {
    username,
    password,
    error,
    setShowSuccess,
    setUsername,
    setPassword,
    register,
    closeSuccess,
    showSuccess,
  };
};

export default useRegister;
