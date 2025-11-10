import { Box } from "@mui/material";
//import ProtectedRoute from "../../Components/Shared-ui/ProtectedWrapper";
import Sidebar from "../../Components/Shared-ui/SideBar";
import { colors } from "../../Constants/colors";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    //<ProtectedRoute>
      <Box
        display={"flex"}
        flexDirection={"row"}
        minHeight={'100vh'}
        style={{ padding: "1.25rem", gap: "1.25rem" }}
        sx={{
          background: `linear-gradient(145deg, ${colors.voilet500} 50%, ${colors.gray900} 100%)`,
        }}
      >
        <Sidebar />
        {/* <Sidebar /> */}
        {children} {/* 👈 This is the Next.js equivalent of <Outlet /> */}
      </Box>
    //</ProtectedRoute>
  );
}
