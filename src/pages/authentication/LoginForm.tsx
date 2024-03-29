import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

type Props = {};
interface State {
  email: string;
  password: string;
  showPassword: boolean;
}

const LoginForm = (props: Props) => {
  const [values, setValues] = useState<State>({
    email: "",
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    if (values.email === "mall" && values.password === "123") {
      localStorage.setItem("user", "mall");
      window.location.reload();
      return;
    } else if (values.email === "shop" && values.password === "123") {
      localStorage.setItem("user", "shop");
      window.location.reload();
      return;
    } else {
      alert("بيانات الدخول غير صحيحة");
      return;
    }
  };
  return (
    <div>
      <Typography
        sx={{
          color: (theme) => theme.palette.text.primary,
          fontSize: "22px",
          mb: 2,
          width: { xs: "100%", sm: "88%" },
        }}
        variant="h3"
      >
        Enter Your ID number associated with your account
      </Typography>
      <form onSubmit={(e) => handelSubmit(e)}>
        <TextField
          id="outlined-basic"
          label="User Name or Email"
          variant="outlined"
          fullWidth
          margin="dense"
          style={{ marginTop: 25, marginBottom: 15 }}
          onChange={(e) => {
            setValues({
              ...values,
              email: e.target.value,
            });
          }}
        />
        <FormControl
          sx={{ mt: 1, mb: 2, width: "100%" }}
          variant="outlined"
          margin="dense"
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                  onClick={handleClickShowPassword}
                  style={{ color: "#333" }}
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            onChange={(e) => {
              setValues({
                ...values,
                password: e.target.value,
              });
            }}
          />
        </FormControl>
        <Link href="/" component="a">
          Forget Password?
        </Link>
        {/*should change to Link component from react-router */}
        <Button
          type="submit"
          variant="contained"
          fullWidth
          size="large"
          sx={{ p: 1.5 }}
          style={{
            marginTop: 30,
            marginBottom: 15,
            backgroundColor: "#0068B3",
          }}
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
