import { alpha } from "@mui/material/styles";
import { Box, Stack, AppBar, IconButton, Typography } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

import AccountPopover from "./AccountPopover";
import NotificationsPopover from "./NotificationsPopover";

import ModeNightIcon from "@mui/icons-material/ModeNight";



export default function DashboardNavbar({ onOpenSidebar }) {
  const DRAWER_WIDTH = 280;
  return (
    <AppBar
      sx={{
        boxShadow: "none",
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        bgcolor: alpha("#fff", 0.5),
        width: { md: `calc(100% - ${DRAWER_WIDTH}px)` },
        marginTop:1.5,
        paddingTop:5,
      }}
    >
      <Stack justifyContent='center' alignItems='center'>

        <Typography
          display={{ xs: "none", md: "flex" }}
          color="black"
          variant="subtitle1"
          fontSize={20}
          letterSpacing={1}
          
        >
          صبا صدقی عزیز، خوش اومدی
        </Typography>
      </Stack>

    </AppBar>
  );
}
