import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Box,
  Drawer,
  Typography,
  Avatar,
  Stack,
  alpha,
  IconButton,
  AppBar,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

import useResponsive from "hooks/useResponsive";

import Logo from "images/logo.svg";
import Scrollbar from "components/Scrollbar";

import NavSection from "./Nav";
import { useSelector } from "react-redux";
import avatar from "images/avatar.png";

export default function DashboardSidebar({
  isOpenSidebar,
  onCloseSidebar,
  onOpenSidebar,
}) {
  const { pathname } = useLocation();
  const DRAWER_WIDTH = 280;

  const isDesktop = useResponsive("up", "md");
  const { cellphone, username, roles } = useSelector(
    (state) => state.user?.userInfo
  );

  const [open, setOpen] = useState(false);

  const drawerWidth = 250;

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
  }, [pathname]);

  const renderContent = (
    // <Scrollbar
    //   sx={{
    //     height: 1,
        
    //     "& .simplebar-content": {
    //       height: 1,
    //       display: "flex",
    //       flexDirection: "column",
          
    //     },
    //   }}
    // >
    <>
      <Stack
        bgcolor="#D0F2FF"
        alignItems="center"
        justifyContent="center"
        rowGap={1}
        py={2}
        borderRadius={2}
        top={8}
        m={1}
        zIndex={1}
        position="sticky"
      >
        <Avatar sx={{ width: 80, height: 80 }} src={avatar} />
        <Typography
          borderRadius={3}
          px={1}
          lineHeight={2.25}
          fontSize={12}
          width={80}
          variant="subtitle1"
          textAlign="center"
          sx={{ bgcolor: "#6A9FD1" }}
          color="white"
        >
          {username}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {cellphone}
        </Typography>
      </Stack>

     <NavSection/>

      <Stack
        width="100%"
        mt={10}
        alignSelf="flex-end"
        justifyContent="center"
        alignItems="center"
      >
        <img src={Logo} />
      </Stack>
      </>
    // </Scrollbar>
  );

  return (
    <Box
      sx={{
        width: { xs: 0, md: drawerWidth },
        transition: "all 0.5s ease",
      }}
      
    >
      {!isDesktop && (
        <>
          <AppBar
            sx={{
              boxShadow: "none",
              borderBottomLeftRadius: 16,
              borderBottomRightRadius: 16,
              bgcolor: alpha("#fff", 0.5),
              width: { md: `calc(100% - ${DRAWER_WIDTH}px)` },
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              px={{ xs: 1, lg: 4 }}
              minHeight={{ xs: 64, lg: 92 }}
              width="100%"
            >
              <IconButton
                size="medium"
                onClick={onOpenSidebar}
                sx={{
                  bgcolor: "info.lighter",
                  color: "info.main",
                  display: { md: "none" },
                  mr: 5,
                }}
              >
                <MenuRoundedIcon fontSize="small" color="info" />
                <Drawer
                  open={isOpenSidebar}
                  onClose={onCloseSidebar}
                  PaperProps={{
                    sx: {
                      m: 1,
                      border: "none",
                      borderRadius: 2,
                      width: drawerWidth - 16,
                      height: "calc(100% - 16px)",
                      direction: "rtl",
                    },
                  }}
                >
                  {renderContent}
                </Drawer>
              </IconButton>
              <Typography
                // display={{ xs: "none", md: "flex" }}
                color="black"
                variant="subtitle1"
                fontSize={20}
                letterSpacing={1}
                margin="auto"
              >
                صبا صدقی عزیز، خوش اومدی
              </Typography>
            </Stack>
          </AppBar>
        </>
      )}

      {isDesktop && (
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: {
              m: 1,
              border: "none",
              borderRadius: 2,
              bgcolor: "#f5fdff",
              width: drawerWidth - 16,
              height: "calc(100% - 16px)",
              boxShadow: "0 0 8px -4px #00000055",
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}
