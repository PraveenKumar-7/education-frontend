import DashboardLayout from "../../layouts/DashboardLayout";
import { Typography } from "@mui/material";

export default function TeacherDashboard() {
  return (
    <DashboardLayout>
      <Typography variant="h4">Teacher Dashboard</Typography>
      <Typography sx={{ mt: 2 }}>View and Manage Classes</Typography>
    </DashboardLayout>
  );
}
