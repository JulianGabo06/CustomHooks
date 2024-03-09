import { useState } from "react";

const useLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("initialState");
  const [showErrorModal, setShowErrorModal] = useState(false);

  const login = (credentials) => {
    if (!credentials.username || !credentials.password) {
      setError("Complete todos los campos");
      setShowErrorModal(true);
      return;
    }

    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (
      credentials.username === storedUsername &&
      credentials.password === storedPassword
    ) {
      console.log("mi loco estás logeao");
    } else {
      console.log("error");
      setError("Usuario o contraseña incorrectos");
      setShowErrorModal(true);
    }
  };
  const closeErrorModal = () => {
    setShowErrorModal(false);
  };

  return {
    username,
    password,
    error,
    showErrorModal,
    setUsername,
    setPassword,
    login,
    closeErrorModal,
  };
};

export default useLogin;
