import { Drawer, List, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

export default function Sidebar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const menu = {
    admin: ["Dashboard", "Manage Teachers", "Manage Students"],
    teacher: ["Dashboard", "My Classes", "Assignments"],
    student: ["Dashboard", "My Courses", "Profile"]
  }[user.role];

  return (
    <Drawer
      variant="permanent"
      sx={{ width: drawerWidth, [`& .MuiDrawer-paper`]: { width: drawerWidth } }}
    >
      <Toolbar>
        <Typography variant="h6">{user.role.toUpperCase()} PANEL</Typography>
      </Toolbar>

      <List>
        {menu.map((text) => (
          <ListItemButton key={text} onClick={() => navigate(`/${user.role}`)}>
            <ListItemText primary={text} />
          </ListItemButton>
        ))}

        <ListItemButton onClick={logout}>
          <ListItemText primary="Logout" />
        </ListItemButton>
      </List>
    </Drawer>
  );
}
