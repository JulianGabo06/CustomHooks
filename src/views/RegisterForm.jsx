import React from "react";
import {
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import useRegister from "../hooks/pages/Auth/useRegister";

const RegisterForm = () => {
  const {
    error,
    password,
    username,
    setPassword,
    setUsername,
    register,
    showSuccess,
    closeSuccess,
  } = useRegister();

  const handleSubmit = (event) => {
    event.preventDefault();
    register();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Register
        </Button>
      </form>
      <Dialog
        open={showSuccess}
        onClose={closeSuccess}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Registro exitoso"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Tu cuenta ha sido creada con éxito. Ahora puedes iniciar sesión.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeSuccess} color="primary" autoFocus>
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default RegisterForm;
