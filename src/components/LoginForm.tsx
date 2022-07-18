import { Button, FormControl, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import IconButton from '@mui/material/IconButton';
 import { useState} from 'react';
 import Visibility from '@mui/icons-material/Visibility';
 import VisibilityOff from '@mui/icons-material/VisibilityOff';
 
type Props = {}
interface State {
    email: string;
    password: string;
    showPassword: boolean;
  }
  
const LoginForm = (props: Props) => {
    const [values, setValues] = useState<State>({
        email: '',
        password: '',
        showPassword: false,
      });
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
  return (
    <div>
        <h2 style={{color:'#333'}}>Enter Your ID number associated with<br/> your account</h2>
        <form>

        <TextField id="outlined-basic" label="UserName or Email" variant="outlined" fullWidth margin='dense' style={{marginTop:25 , marginBottom:15}}/>
        <FormControl sx={{ mt: 1 , mb:2 , width: '100%' }} variant="outlined"  margin='dense' >
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            
            endAdornment={
              <InputAdornment position="end" >
                <IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                  onClick={handleClickShowPassword}
                  style={{color: '#333'}}
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <a href='#' className="link-style text-right">Forget Password?</a>  {/*should change to Link component from react-router */}
        <Button type="submit" variant="contained" fullWidth size="large" sx={{p:1.5}} style={{marginTop:30 , marginBottom:15 , backgroundColor:'#0068B3'}}   >
            Login
        </Button>
        

        </form>
    </div>
  )
}

export default LoginForm