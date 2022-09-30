import React from "react";
import { Paper, Grid, TextField, Button, Link } from "@mui/material";

const Login = () => {
  return (
    <Paper variant="outlined" sx={{ padding: "20px" }}>
      <Grid container>
        <Grid item xs={12}>
          <TextField label="Usuario" />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-password-input"
            label="Contraseña"
            type="password"
            autoComplete="current-password"
          />
          <Link href="#">No recuerdo mi contraseña</Link>
              </Grid>
              
        <Button variant="outlined" color="secondary">
          Entrar
        </Button>
        o
        <Button variant="outlined" color="secondary">
          Registrarse
        </Button>
      </Grid>
    </Paper>
  );
};

export default Login;
