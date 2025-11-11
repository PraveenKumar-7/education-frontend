import DashboardLayout from "../../layouts/DashboardLayout";
import { Typography } from "@mui/material";

export default function AdminDashboard() {
  return (
    <DashboardLayout>
      <Typography variant="h4">Admin Dashboard</Typography>
      <Typography sx={{ mt: 2 }}>Manage Teachers and Students</Typography>
    </DashboardLayout>
  );
}
