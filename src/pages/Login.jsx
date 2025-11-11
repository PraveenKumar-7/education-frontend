import { useState } from "react";
import { TextField, Button, Container, Typography, Box, Card, Link } from "@mui/material";
import { loginUser } from "../auth/fakeAuthService";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogin = () => {
    const res = loginUser({ email, password });
    if (res.error) return setError(res.error);

    login(res.user, res.token);

    if (res.user.role === "admin") navigate("/admin");
    else if (res.user.role === "teacher") navigate("/teacher");
    else navigate("/student");
  };

  return (
    <Container maxWidth="xs" sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
      <Card sx={{ width: "100%", p: 4, boxShadow: 5, borderRadius: 2 }}>
        <Typography variant="h4" textAlign="center" sx={{ mb: 3 }}>
          Login
        </Typography>

        {error && <Typography color="error" textAlign="center">{error}</Typography>}

        <TextField 
          fullWidth 
          label="Email" 
          value={email} 
          onChange={(e)=>setEmail(e.target.value)} 
          sx={{ mb: 2 }} 
        />

        <TextField 
          fullWidth 
          label="Password" 
          type="password" 
          value={password} 
          onChange={(e)=>setPassword(e.target.value)} 
          sx={{ mb: 3 }} 
        />

        <Button variant="contained" fullWidth onClick={handleLogin}>
          Login
        </Button>

        <Box textAlign="center" sx={{ mt: 2 }}>
          <Typography variant="body2">
            Don't have an account?{" "}
            <Link sx={{ cursor: "pointer" }} onClick={() => navigate("/register")}>
              Create Account
            </Link>
          </Typography>
        </Box>
      </Card>
    </Container>
  );
}
