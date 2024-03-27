// function Header() {
//   const [open, setOpen] = React.useState(false);
//   const [singUpOpen, setsingUpOpen] = React.useState(false);

// const handleClickOpen = () => {
//   setOpen(true);
// };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleSignUpOpen = () => {
//     setsingUpOpen(true);
//   };

//   const handleSignUpClose = () => {
//     setsingUpOpen(false);
//   };

// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: 25,
//   backgroundColor: alpha("#ECECEC", 0.75),
//   "&:hover": {
//     backgroundColor: alpha("#ECECEC", 1),
//   },
//   width: "165px",
//   [theme.breakpoints.up("md")]: {
//     marginLeft: theme.spacing(3),
//     width: "auto",
//   },
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("md")]: {
//       width: "20ch",
//     },
//   },
// }));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   left: 0,
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

//   const [anchorElNav, setAnchorElNav] =useState(null)
//   const [anchorElUser, setAnchorElUser] =useState(null)

//    const handleOpenNavMenu = (event) => {
//      setAnchorElNav(event.currentTarget);
//    };

//    const handleCloseNavMenu = () => {
//      setAnchorElNav(null);
//    };

//   return (
//     <Box sx={{ flexGrow: 1 }}>
// <AppBar
//   position="static"
//   color="inherit"
//   sx={{
//     backgroundImage: `url(${verctor1})`,
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "100% 100%",
//     backgroundPosition: "center",
//     boxShadow: "none",
//   }}
// >
//         <Toolbar>
//           <img
//             src={logo}
//             width="170px"
//             height="47.6px"
//           />

// <Stack
//   direction="row"
//   justifyContent="center"
//   alignItems="center"
//   sx={{
//     flexGrow: 1,
//     display: { xs: "none", lg: "flex" },
//     marginTop: "55px",
//     marginBottom: "70px",
//     gap: 7,
//   }}
// >
//             {pages.map((page) => (
//               <Link key={page.id} variant="subtitle2" to={page.link}>
//                 {page.title}
//               </Link>
//             ))}
//           </Stack>
//           <Box
//             sx={{
//               flexGrow: 1,
//               display: { xs: "flex", lg: "none" },
//               left: 0,
//               position: "absolute",
//             }}
//           >
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: "bottom",
//                 horizontal: "left",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "left",
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: "block", md: "none" },
//               }}
//             >
// {pages.map((page) => (
//   <MenuItem key={page.id} onClick={handleCloseNavMenu}>
//     <Link  variant="subtitle2" to={page.link}>
//       {page.title}
//     </Link>{" "}
//   </MenuItem>
// ))}
//             </Menu>
//           </Box>
// <Stack direction="row" columnGap={2}>
//   <Search>
//     <SearchIconWrapper>
//       <SearchIcon style={{ color: "#79716C" }} />
//     </SearchIconWrapper>
//     <StyledInputBase
//       style={{ color: "#79716C" }}
//       placeholder="جستجو..."
//       inputProps={{ "aria-label": "search" }}
//     />
//   </Search>

//   <IconButton
//     size="medium
// "
//     sx={{
//       bgcolor: "#FEF7D1",
//       color: "#F5C344",
//     }}
//   >
//     <ModeNightIcon fontSize="35" />
//   </IconButton>

//   <IconButton
//     size="medium
// "
//     sx={{
//       bgcolor: alpha("#FF5A00", 0.25),
//       color: "#FF5A00",
//     }}
//   >
//     <LocalMallIcon fontSize="35" />
//   </IconButton>

//   <IconButton
//     size="medium
// "
//     sx={{
//       bgcolor: alpha("#6E9DCB", 0.25),
//       color: "#6A9FD1",
//     }}
//     onClick={handleClickOpen}
//   >
//     <LoginIcon fontSize="35" />
//   </IconButton>
// </Stack>
// <Dialog
//   open={open}
//   onClose={handleClose}
//   aria-labelledby="alert-dialog-title"
//   aria-describedby="alert-dialog-description"
// >
//   <DialogTitle id="alert-dialog-title" textAlign="center">
//     ورود به ایزی کد
//   </DialogTitle>
//   <DialogContent>
//     <Stack
//       direction={{ xs: "column", sm: "row" }}
//       sx={{ direction: "rtl" }}
//       rowGap={5}
//       columnGap={2}
//     >
//       <Stack
//         flex={1}
//         justifyContent="center"
//         alignItems="center"
//         rowGap={5}
//         minWidth={400}
//         minHeight={350}
//         p={2}
//         borderRadius={6}
//         bgcolor="#F9F9F9"
//       >
//         <form style={{ height: "100%" }}>
//           <Stack height="100%" rowGap={1} columnGap={1} px={1}>
//             <Stack rowGap={1} flex={1} justifyContent="center">
//               <input
//                 placeholder="تلفن همراه"
//                 dir="rtl"
//                 name="cellphone"
//                 type="tel"
//                 style={{
//                   width: "350px",
//                   borderRadius: "10px",
//                   height: "55px",
//                   padding: "5px",
//                   border: "1px solid lightgray",
//                 }}
//                 margin="dense"
//                 // onChange={handleChange}
//                 // value={formState.values.cellphone}
//                 // error={hasError("cellphone")}
//                 // helperText={
//                 //   hasError("cellphone")
//                 //     ? formState.errors.cellphone[0]
//                 //     : null
//                 // }
//               />
//               <input
//                 placeholder="گذرواژه"
//                 name="password"
//                 type="password"
//                 style={{
//                   width: "350px",
//                   borderRadius: "10px",
//                   height: "55px",
//                   padding: "5px",
//                   marginTop: "10px",

//                   border: "1px solid lightgray",
//                 }}
//                 margin="dense"
//                 // onChange={handleChange}
//                 // value={formState.values.password}
//                 // error={hasError("password")}
//                 // helperText={
//                 //   hasError("password")
//                 //     ? formState.errors.password[0]
//                 //     : null
//                 // }
//               />
//             </Stack>
//             {/* <DialogActions> */}
//             <Stack rowGap={1} alignItems="center">
//               <Button
//                 fullWidth
//                 size="large"
//                 type="submit"
//                 style={{
//                   backgroundColor: "#FF5A00",
//                   boxShadow: "none",
//                 }}
//                 variant="contained"
//                 // disabled={!formState.isValid}
//               >
//                 ورود
//               </Button>
//               <Button
//                 fullWidth
//                 size="small"
//                 onClick={handleSignUpOpen}
//               >
//                 ثبت نام
//               </Button>
//               <Dialog
//                 open={singUpOpen}
//                 onClose={handleSignUpClose}
//                 aria-labelledby="alert-dialog-title"
//                 aria-describedby="alert-dialog-description"
//               >
//                 <DialogTitle
//                   id="alert-dialog-title"
//                   textAlign="center"
//                 >
//                   ثبت نام در ایزی کد
//                 </DialogTitle>
//                 <DialogContent>
//                   <Stack
//                     direction={{ xs: "column", sm: "row" }}
//                     sx={{ direction: "rtl" }}
//                     rowGap={5}
//                     columnGap={2}
//                   >
//                     <Stack
//                       flex={1}
//                       justifyContent="center"
//                       alignItems="center"
//                       rowGap={5}
//                       minWidth={400}
//                       minHeight={350}
//                       p={2}
//                       borderRadius={6}
//                       bgcolor="#F9F9F9"
//                     >
//                       <form style={{ height: "100%" }}>
//                         <Stack
//                           height="100%"
//                           rowGap={1}
//                           columnGap={1}
//                           px={1}
//                         >
//                           <Stack
//                             rowGap={1}
//                             flex={1}
//                             justifyContent="center"
//                           >
//                             <input
//                               placeholder="تلفن همراه"
//                               dir="rtl"
//                               name="cellphone"
//                               type="tel"
//                               style={{
//                                 width: "350px",
//                                 borderRadius: "10px",
//                                 height: "55px",
//                                 padding: "5px",
//                                 border: "1px solid lightgray",
//                               }}
//                               margin="dense"
//                               // onChange={handleChange}
//                               // value={formState.values.cellphone}
//                               // error={hasError("cellphone")}
//                               // helperText={
//                               //   hasError("cellphone")
//                               //     ? formState.errors.cellphone[0]
//                               //     : null
//                               // }
//                             />
//                             <input
//                               placeholder="گذرواژه"
//                               name="password"
//                               type="password"
//                               style={{
//                                 width: "350px",
//                                 borderRadius: "10px",
//                                 height: "55px",
//                                 padding: "5px",
//                                 marginTop: "10px",

//                                 border: "1px solid lightgray",
//                               }}
//                               margin="dense"
//                               // onChange={handleChange}
//                               // value={formState.values.password}
//                               // error={hasError("password")}
//                               // helperText={
//                               //   hasError("password")
//                               //     ? formState.errors.password[0]
//                               //     : null
//                               // }
//                             />
//                           </Stack>
//                           {/* <DialogActions> */}
//                           <Stack rowGap={1} alignItems="center">
//                             <Button
//                               fullWidth
//                               size="large"
//                               type="submit"
//                               style={{
//                                 backgroundColor: "#FF5A00",
//                                 boxShadow: "none",
//                               }}
//                               variant="contained"
//                               // disabled={!formState.isValid}
//                             >
//                               ثبت نام
//                             </Button>
//                             <Button
//                               fullWidth
//                               size="small"
//                               onClick={handleSignUpOpen}
//                             >
//                               ورود
//                             </Button>
//                           </Stack>
//                         </Stack>
//                       </form>
//                     </Stack>
//                   </Stack>{" "}
//                 </DialogContent>
//               </Dialog>
//             </Stack>
//           </Stack>
//         </form>
//       </Stack>
//     </Stack>{" "}
//   </DialogContent>
// </Dialog>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }

// export default Header;

import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import verctor1 from "../../images/Vector1.png";
import logo from "../../images/logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import LoginIcon from "@mui/icons-material/Login";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Stack,
  Toolbar,
  InputBase,
  MenuItem,
  IconButton,
  Tooltip,
  Button,
  Menu,
  Container,
  Typography,
  Box,
  AppBar,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useDispatch } from "react-redux";
// import { themeToggle } from "../../redux/features/themeReducer";

const pages = [
  {
    id: 1,
    title: "صفحه اصلی",
    link: "/",
  },
  {
    id: 2,
    title: "دوره ها",
    link: "#",
  },
  {
    id: 3,
    title: "بلاگ",
    link: "#",
  },
  {
    id: 4,
    title: "تماس با ما",
    link: "#",
  },
  {
    id: 5,
    title: "درباره ما",
    link: "#",
  },
];

function ResponsiveAppBar() {
  const [isLight, setIsLight] = React.useState(true);

  const dispatch = useDispatch();

  // const changeTheme = () => {
  //   dispatch(themeToggle());
  //   setIsLight(!isLight);
  // };

  const AvatarIcon = isLight ? LightModeIcon : DarkModeIcon;

  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.up("md"));

  let size;
  if (matchesXS) {
    size = "small";
  } else if (matchesMD) {
    size = "medium";
  } else {
    size = "medium";
  }
  const [open, setOpen] = React.useState(false);
  const [singUpOpen, setsingUpOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: 0,
    backgroundColor: alpha("#ECECEC", 0.25),
    "&:hover": {
      backgroundColor: alpha("#ECECEC", 1),
    },
    width: "100%",
    [theme.breakpoints.up("lg")]: {
      backgroundColor: alpha("#ECECEC", 0.75),

      marginLeft: theme.spacing(3),
      borderRadius: 25,
      width: "auto",
    },
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    left: 0,
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSignUpOpen = () => {
    setsingUpOpen(true);
  };

  const handleSignUpClose = () => {
    setsingUpOpen(false);
  };

  return (
    <AppBar
      position="static"
      color="inherit"
      sx={{
        backgroundImage: `url(${verctor1})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        bgcolor: "#fcfcfc",
        boxShadow: "none",
      }}
    >
      <Container maxWidth="xl">
        {/* <Stack direction="row" columnGap={2}>
          <Search sx={{ display: { xs: "flex", lg: "none" } }}>
            <SearchIconWrapper>
              <SearchIcon style={{ color: "#79716C" }} />
            </SearchIconWrapper>
            <StyledInputBase
              style={{ color: "#79716C" }}
              placeholder="جستجو..."
              inputProps={{ "aria-label": "search" }}
            />
          </Search> */}
        {/* </Stack> */}
        <Toolbar disableGutters>
          <Stack mt={-5} sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            <a href="/">
              <img src={logo} width="170px" height="47.6px" />
            </a>
          </Stack>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                  <Link variant="subtitle2" to={page.link}>
                    {page.title}
                  </Link>{" "}
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Stack
            flexGrow={{ xs: 0, sm: 0.5 }}
            mt={-1}
            sx={{ display: { xs: "flex", md: "none" }, mr: 2 }}
          >
            <img src={logo} width="170px" height="46.6px" />
          </Stack>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            mt={3.5}
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              marginBottom: "70px",
              gap: 5,
            }}
          >
            {pages.map((page) => (
              <Link key={page.id} variant="subtitle2" to={page.link}>
                {page.title}
              </Link>
            ))}
          </Stack>
          <Box sx={{ flexGrow: 0 }}>
            <Stack mt={{ xs: 0, md: -5 }} direction="row" columnGap={2}>
              <Search sx={{ display: { xs: "none", lg: "flex" } }}>
                <SearchIconWrapper>
                  <SearchIcon style={{ color: "#79716C" }} />
                </SearchIconWrapper>
                <StyledInputBase
                  style={{ color: "#79716C" }}
                  placeholder="جستجو..."
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>

              <IconButton
                size={size}
                sx={{
                  bgcolor: "#FEF7D1",
                  color: "#F5C344",
                }}
              >
                <ModeNightIcon fontSize="35" />
              </IconButton>

              <IconButton
                size={size}
                sx={{
                  bgcolor: alpha("#FF5A00", 0.25),
                  color: "#FF5A00",
                }}
              >
                <LocalMallIcon fontSize="35" />
              </IconButton>

              <IconButton
                size={size}
                sx={{
                  bgcolor: alpha("#6E9DCB", 0.25),
                  color: "#6A9FD1",
                }}
                onClick={handleClickOpen}
              >
                <LoginIcon fontSize="35" />
              </IconButton>
            </Stack>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title" textAlign="center">
                ورود به ایزی کد
              </DialogTitle>
              <DialogContent>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  sx={{ direction: "rtl" }}
                  rowGap={5}
                  columnGap={2}
                >
                  <Stack
                    flex={1}
                    justifyContent="center"
                    alignItems="center"
                    rowGap={5}
                    minWidth={400}
                    minHeight={350}
                    p={2}
                    borderRadius={6}
                    bgcolor="#F9F9F9"
                  >
                    <form style={{ height: "100%" }}>
                      <Stack height="100%" rowGap={1} columnGap={1} px={1}>
                        <Stack rowGap={1} flex={1} justifyContent="center">
                          <input
                            placeholder="تلفن همراه"
                            dir="rtl"
                            name="cellphone"
                            type="tel"
                            style={{
                              width: "350px",
                              borderRadius: "10px",
                              height: "55px",
                              padding: "5px",
                              border: "1px solid lightgray",
                            }}
                            margin="dense"
                            // onChange={handleChange}
                            // value={formState.values.cellphone}
                            // error={hasError("cellphone")}
                            // helperText={
                            //   hasError("cellphone")
                            //     ? formState.errors.cellphone[0]
                            //     : null
                            // }
                          />
                          <input
                            placeholder="گذرواژه"
                            name="password"
                            type="password"
                            style={{
                              width: "350px",
                              borderRadius: "10px",
                              height: "55px",
                              padding: "5px",
                              marginTop: "10px",

                              border: "1px solid lightgray",
                            }}
                            margin="dense"
                            // onChange={handleChange}
                            // value={formState.values.password}
                            // error={hasError("password")}
                            // helperText={
                            //   hasError("password")
                            //     ? formState.errors.password[0]
                            //     : null
                            // }
                          />
                        </Stack>
                        {/* <DialogActions> */}
                        <Stack rowGap={1} alignItems="center">
                          <Button
                            fullWidth
                            size="large"
                            type="submit"
                            style={{
                              backgroundColor: "#FF5A00",
                              boxShadow: "none",
                            }}
                            variant="contained"
                            // disabled={!formState.isValid}
                          >
                            ورود
                          </Button>
                          <Button
                            fullWidth
                            size="small"
                            onClick={handleSignUpOpen}
                          >
                            ثبت نام
                          </Button>
                          <Dialog
                            open={singUpOpen}
                            onClose={handleSignUpClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                          >
                            <DialogTitle
                              id="alert-dialog-title"
                              textAlign="center"
                            >
                              ثبت نام در ایزی کد
                            </DialogTitle>
                            <DialogContent>
                              <Stack
                                direction={{ xs: "column", sm: "row" }}
                                sx={{ direction: "rtl" }}
                                rowGap={5}
                                columnGap={2}
                              >
                                <Stack
                                  flex={1}
                                  justifyContent="center"
                                  alignItems="center"
                                  rowGap={5}
                                  minWidth={400}
                                  minHeight={350}
                                  p={2}
                                  borderRadius={6}
                                  bgcolor="#F9F9F9"
                                >
                                  <form style={{ height: "100%" }}>
                                    <Stack
                                      height="100%"
                                      rowGap={1}
                                      columnGap={1}
                                      px={1}
                                    >
                                      <Stack
                                        rowGap={1}
                                        flex={1}
                                        justifyContent="center"
                                      >
                                        <input
                                          placeholder="تلفن همراه"
                                          dir="rtl"
                                          name="cellphone"
                                          type="tel"
                                          style={{
                                            width: "350px",
                                            borderRadius: "10px",
                                            height: "55px",
                                            padding: "5px",
                                            border: "1px solid lightgray",
                                          }}
                                          margin="dense"
                                          // onChange={handleChange}
                                          // value={formState.values.cellphone}
                                          // error={hasError("cellphone")}
                                          // helperText={
                                          //   hasError("cellphone")
                                          //     ? formState.errors.cellphone[0]
                                          //     : null
                                          // }
                                        />
                                        <input
                                          placeholder="گذرواژه"
                                          name="password"
                                          type="password"
                                          style={{
                                            width: "350px",
                                            borderRadius: "10px",
                                            height: "55px",
                                            padding: "5px",
                                            marginTop: "10px",

                                            border: "1px solid lightgray",
                                          }}
                                          margin="dense"
                                          // onChange={handleChange}
                                          // value={formState.values.password}
                                          // error={hasError("password")}
                                          // helperText={
                                          //   hasError("password")
                                          //     ? formState.errors.password[0]
                                          //     : null
                                          // }
                                        />
                                      </Stack>
                                      {/* <DialogActions> */}
                                      <Stack rowGap={1} alignItems="center">
                                        <Button
                                          fullWidth
                                          size="large"
                                          type="submit"
                                          style={{
                                            backgroundColor: "#FF5A00",
                                            boxShadow: "none",
                                          }}
                                          variant="contained"
                                          // disabled={!formState.isValid}
                                        >
                                          ثبت نام
                                        </Button>
                                        <Button
                                          fullWidth
                                          size="small"
                                          onClick={handleSignUpOpen}
                                        >
                                          ورود
                                        </Button>
                                      </Stack>
                                    </Stack>
                                  </form>
                                </Stack>
                              </Stack>{" "}
                            </DialogContent>
                          </Dialog>
                        </Stack>
                      </Stack>
                    </form>
                  </Stack>
                </Stack>{" "}
              </DialogContent>
            </Dialog>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
