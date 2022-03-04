import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import axios from "axios";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Login({ setIsLogged }: any) {
  const [value, setValue] = React.useState(0);
  const [loginFormData, setLoginFormData] = useState<any>({});
  const [registerFormData, setRegisterFormData] = useState<any>({});

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleRegisterFieldChange = (event: any) => {
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;
    setRegisterFormData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleLoginFieldChange = (event: any) => {
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;
    setLoginFormData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegister = () => {
    axios
      .post("http://localhost:80/auth/register", registerFormData)
      .then((response) => {
        document.cookie = `token=${response.data.token}`;
        setIsLogged(true);
      });
  };
  const handleLogin = () => {
    axios
      .post("http://localhost:80/auth/login", loginFormData)
      .then((response) => {
        document.cookie = `token=${response.data.token}`;
        setIsLogged(true);
      });
  };

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Login" {...a11yProps(0)} />
          <Tab label="Register" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              required
              id="username"
              label="User Name"
              name="username"
              onChange={handleLoginFieldChange}
            />
            <TextField
              required
              id="password"
              label="Password"
              type="password"
              name="password"
              onChange={handleLoginFieldChange}
              autoComplete="current-password"
            />
            <Button variant="contained" onClick={handleLogin}>
              Login
            </Button>
          </div>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="username"
            label="Username"
            placeholder="username"
            name="username"
            onChange={handleRegisterFieldChange}
            required
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            required
            name="password"
            onChange={handleRegisterFieldChange}
          />
          <TextField
            id="password"
            label="Password Confirm"
            type="password"
            autoComplete="current-password"
            name="passwordConfirm"
            onChange={handleRegisterFieldChange}
            required
          />
          <Button variant="contained" onClick={handleRegister}>
            Register
          </Button>
        </Box>
      </TabPanel>
    </>
  );
}
export default Login;
