import DashboardLayout from "../../layouts/DashboardLayout";
import { Typography } from "@mui/material";

export default function StudentDashboard() {
  return (
    <DashboardLayout>
      <Typography variant="h4">Student Dashboard</Typography>
      <Typography sx={{ mt: 2 }}>View Courses & Profile</Typography>
    </DashboardLayout>
  );
}
