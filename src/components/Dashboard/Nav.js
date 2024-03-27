import { useState } from "react";
import PropTypes from "prop-types";
import {
  NavLink as RouterLink,
  matchPath,
  useLocation,
} from "react-router-dom";

import { styled } from "@mui/material/styles";
import {
  Box,
  List,
  Collapse,
  IconButton,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  Avatar,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";

import { useTranslation } from "react-i18next";
import { navConfig } from "routes";
import { useSelector } from "react-redux";

// ----------------------------------------------------------------------

const ListItemStyle = styled((props) => (
  <ListItemButton disableGutters {...props} />
))(({ theme }) => ({
  ...theme.typography.body2,
  height: 48,
  position: "relative",
  textTransform: "capitalize",
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius * 2,
  transition: "all 0.5s ease",
  "&:hover": {
    backgroundColor: theme.palette.info.lighter,
    transition: "all 0.5s ease",
  },
}));

const ListItemIconStyle = styled(ListItemIcon)({
  width: 22,
  height: 22,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const ExpandMore = styled(({ expand, ...other }) => (
  <IconButton disableRipple {...other} />
))(({ theme, expand }) => ({
  transform: !expand ? "rotate(90deg)" : "rotate(0deg)",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

// ----------------------------------------------------------------------



function NavItem({ item, active, hasRequiredRole }) {
  const isActiveRoot = active(item.url);
  const { userInfo } = useSelector((state) => state.user);
  const { title , icon, url, children = [] } = item;
  const [open, setOpen] = useState(isActiveRoot);
  const { t } = useTranslation("sidebar");

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const defultRootStyle = {
    fontWeight: "bold",
  };

  const activeRootStyle = {
    fontWeight: "bold",
    color: "primary.main",
    bgcolor: "info.lighter",
  };

  const activeSubStyle = {
    color: "primary.main",
    bgcolor: "info.lighter",
  };

  if (children.length > 0) {
    return (
      <>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {children.map((item, index) => {
              const { title, url, inSidebar , roles } = item;
              const isActiveSub = active(url);

              if (inSidebar && hasRequiredRole(roles, userInfo?.roles)) {
                return (
                  <ListItemStyle
                    key={index}
                    component={RouterLink}
                    to={url}
                    sx={{
                      my: 0.2,
                      ...(isActiveSub && activeSubStyle),
                    }}
                  >
                    <ListItemIconStyle
                      sx={{
                        width: 4,
                        height: 4,
                        display: "flex",
                        mx:3,
                        borderRadius: "50%",
                        alignItems: "center",
                        justifyContent: "center",
                        bgcolor: "text.disabled",
                        transition: (theme) =>
                          theme.transitions.create("transform"),
                        ...(isActiveSub && {
                          transform: "scale(1.3)",
                          bgcolor: "primary.main",
                        }),
                      }}
                    >
                      {/* <Box
                        component="span"
                        sx={{
                          width: 4,
                          height: 4,
                          display: "flex",
                          borderRadius: "50%",
                          alignItems: "center",
                          justifyContent: "center",
                          bgcolor: "text.disabled",
                          transition: (theme) =>
                            theme.transitions.create("transform"),
                          ...(isActiveSub && {
                            transform: "scale(2)",
                            bgcolor: "primary.main",
                          }),
                        }}
                      /> */}
                      {item.icon}
                    </ListItemIconStyle>
                    <ListItemText
                      sx={{ color: isActiveSub && "primary.main" , fontSize:'15px' }}
                      disableTypography
                      primary={t(title)}
                    />
                    <Box sx={{ width: 16, height: 16, mr: 2, ml: 2 }} />
                  </ListItemStyle>
                );
              }
            })}
          </List>
        </Collapse>
      </>
    );
  }

  return (
    <ListItemStyle
      component={RouterLink}
      to={url}
      sx={{
        ...(isActiveRoot && activeRootStyle),
      }}
    >
      <ListItemIconStyle>
        <CheckCircleOutlineRoundedIcon />
      </ListItemIconStyle>
      <ListItemText disableTypography primary={t(title)} />
      <Box sx={{ width: 16, height: 16, mr: 2, ml: 2 }} />
    </ListItemStyle>
  );
}

export default function NavSection() {
  const { pathname } = useLocation();
  const { userInfo } = useSelector((state) => state.user);
  const hasRequiredRole = (routeRoles = [], userRoles = []) => {
    if (routeRoles.length > 0) {
      return userRoles.filter((el) => routeRoles.includes(el.name)).length > 0;
    }
    return true;
  };
  const match = (path) =>
    path ? !!matchPath({ path, end: false }, pathname) : false;
  return (
    <List sx={{ px: 1, display: "flex", flexDirection: "column", rowGap: 0.5 }}>
      {navConfig.map(
        (item, index) =>
          item?.inSidebar &&
          hasRequiredRole(item.roles, userInfo?.roles) && (
            <NavItem
              key={index}
              item={item}
              active={match}
              hasRequiredRole={hasRequiredRole}
            />
          )
      )}
    </List>
  );
}
