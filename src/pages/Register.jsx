import { useState } from "react";
import { TextField, Button, Container, MenuItem, Typography, Card, Box, Link } from "@mui/material";
import { registerUser } from "../auth/fakeAuthService";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({
    name: "", gender: "", role: "", department: "", year: "", email: "", password: ""
  });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    const res = registerUser(form);
    if (res.error) return setMsg(res.error);
    setMsg("Account Created! You can Login now.");
  };

  const handleChange = (e) => setForm({...form, [e.target.name]: e.target.value});

  return (
    <Container maxWidth="sm" sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
      <Card sx={{ width: "100%", p: 4, boxShadow: 5, borderRadius: 2 }}>
        <Typography variant="h4" textAlign="center" sx={{ mb: 3 }}>
          Create Account
        </Typography>

        {msg && <Typography textAlign="center" color="primary" sx={{ mb: 2 }}>{msg}</Typography>}

        <TextField fullWidth label="Name" name="name" onChange={handleChange} sx={{ mb: 2 }} />
        <TextField fullWidth label="Email" name="email" onChange={handleChange} sx={{ mb: 2 }} />
        <TextField fullWidth label="Password" type="password" name="password" onChange={handleChange} sx={{ mb: 2 }} />
        <TextField fullWidth label="Department" name="department" onChange={handleChange} sx={{ mb: 2 }} />

        <TextField select name="gender" label="Gender" fullWidth onChange={handleChange} sx={{ mb: 2 }}>
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
        </TextField>

        <TextField select name="role" label="Role" fullWidth onChange={handleChange} sx={{ mb: 2 }}>
          <MenuItem value="admin">Admin</MenuItem>
          <MenuItem value="teacher">Teacher</MenuItem>
          <MenuItem value="student">Student</MenuItem>
        </TextField>

        <TextField select name="year" label="Year" fullWidth onChange={handleChange} sx={{ mb: 3 }}>
          <MenuItem value="1st">1st Year</MenuItem>
          <MenuItem value="2nd">2nd Year</MenuItem>
          <MenuItem value="3rd">3rd Year</MenuItem>
        </TextField>

        <Button variant="contained" fullWidth onClick={handleSubmit}>
          Register
        </Button>

        <Box textAlign="center" sx={{ mt: 2 }}>
          <Typography variant="body2">
            Already have an account?{" "}
            <Link sx={{ cursor: "pointer" }} onClick={() => navigate("/")} >
              Login Here
            </Link>
          </Typography>
        </Box>

      </Card>
    </Container>
  );
}
