import { useState } from "react";
import { TextField, Button, Typography, Box, Card, Link } from "@mui/material";
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
    <Box
      sx={{
         width: "100vw",             
        height: "100vh",             
        display: "flex",
        justifyContent: "center",    
        alignItems: "center",        
        background: "linear-gradient(135deg, #2196f3 30%, #21cbf3 90%)",
      }}
    >
      <Card
        sx={{
          width: "380px",
          p: 4,
          boxShadow: 8,
          borderRadius: 3,
          textAlign: "center",
          backgroundColor: "#fff",
        }}
      >
        <Typography
          variant="h4"
          sx={{ mb: 3, color: "#1976d2", fontWeight: "bold" }}
        >
          Login
        </Typography>

        {error && (
          <Typography color="error" textAlign="center" sx={{ mb: 2 }}>
            {error}
          </Typography>
        )}

        <TextField
          fullWidth
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ mb: 3 }}
        />

        <Button
          variant="contained"
          fullWidth
          onClick={handleLogin}
          sx={{
            backgroundColor: "#1976d2",
            "&:hover": { backgroundColor: "#125aa0" },
            py: 1.2,
          }}
        >
          Login
        </Button>

        <Typography variant="body2" sx={{ mt: 2 }}>
          Don’t have an account?{" "}
          <Link
            sx={{
              cursor: "pointer",
              color: "#1976d2",
              fontWeight: "bold",
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            }}
            onClick={() => navigate("/register")}
          >
            Create Account
          </Link>
        </Typography>
      </Card>
    </Box>
  );
}
