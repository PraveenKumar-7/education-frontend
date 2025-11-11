import { Box } from "@mui/material";
import Sidebar from "../components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
    </Box>
  );
}
