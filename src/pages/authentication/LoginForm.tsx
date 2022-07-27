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
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  userName: string;
  passwordRequired: string;
};

type Props = {};
interface State {
  showPassword: boolean;
}

const LoginForm = (props: Props) => {
  const [values, setValues] = useState<State>({
    showPassword: false,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      userName: "",
      passwordRequired: "",
    },
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (data.userName === "mall" && data.passwordRequired === "123") {
      localStorage.setItem("user", "mall");
      window.location.reload();
      return;
    } else if (data.userName === "shop" && data.passwordRequired === "123") {
      localStorage.setItem("user", "shop");
      window.location.reload();
      return;
    } else {
      alert("بيانات الدخول غير صحيحة");
      return;
    }
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="outlined-basic"
          label="User Name or Email"
          variant="outlined"
          fullWidth
          margin="dense"
          style={{ marginTop: 25, marginBottom: 15 }}
          {...register("userName", { required: true })}
          error={errors.userName && true}
          name="userName"
          helperText={errors.userName && "This field is required"}

        />

        <FormControl
          sx={{ mt: 1, mb: 2, width: "100%" }}
          variant="outlined"
          margin="dense"
        >
          <InputLabel
            htmlFor="outlined-adornment-password"
            error={errors.passwordRequired && true}
          >
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? "text" : "password"}
            {...register("passwordRequired", { required: true })}
            error={errors.passwordRequired && true}
            name="passwordRequired"
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
          />
        {errors.passwordRequired && <Typography sx={{fontSize:"12px" , m:"3px 14px 0 14px" ,color:"error.main" }} >This field is required</Typography>}
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
