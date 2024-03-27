

import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import DashboardSidebar from "./DashboardSideBar";
import DashboardNavbar from "./DashboardNavbar";

export default function DashboardLayout() {
  const [open, setOpen] = useState(false);

  return (
    <Box display="flex" bgcolor="#eee" >
      {/* <DashboardNavbar onOpenSidebar={() => setOpen(true)} /> */}
      <DashboardSidebar
        isOpenSidebar={open}
        onCloseSidebar={() => setOpen(false)}
        onOpenSidebar={() => setOpen(true)}
      />
      <Box
        sx={{
          flexGrow: 1,
          overflow: "auto",
          height: "calc(100vh)",
          bgcolor: "transparent",
          pb: 10,
          pt: { xs: 9, lg: 13 },
          px: { xs: 0.5 },
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

