import {
  Avatar,
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import introImage from "images/introImage.png";
import AvaImage from "images/_AvatarGroup_.png";
import dir from "images/Object.svg";
import sweep from "images/sweep.svg";
import display from "images/smart_display.svg";
import diversity from "images/diversity_3.svg";
import how from "images/how_to_reg.svg";
import manage from "images/manage_accounts.svg";


function Introduction() {
  //  const theme =useTheme();
  //  const matchesXS = useMediaQuery(theme.breakpoints.down("xl"));
  //  const matchesMD = useMediaQuery(theme.breakpoints.up("lg"));

  //  let display;
  //  if (matchesMD) {
  //    display = "flex";
  //  }else{
  //   display ="none"
  //  }

  return (
    <>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-evenly"
        gap={20}
        marginTop={5}
      >
        <Stack alignItems={{ xs: "center", md: "start" }}>
          <Typography
            variant="h1"
            component="h1"
            textAlign={{ xs: "center", md: "start" }}
          >
            آموزش برنامه نویسی
            <br />
            با ایزی کد
          </Typography>
          <br />
          <Typography
            variant="subtitle2"
            textAlign={{ xs: "center", md: "start" }}
            component="p"
          >
            با آکادمی خصوصی ایزی کد
            <br />
            <br />
            علم برنامه نویسی رو با خیال راحت یاد بگیر و پیشرفت کن.
          </Typography>

          <Stack
            direction="row"
            position="relative"
            marginTop={{ md: "100px", xs: "50px" }}
          >
            {/* <Avatar
              borderRadius="50%"
              style={{ backgroundColor: "#FF5A00" }}
              width={35}
              height={35}
            >
              <Typography
                color="white"
                marginTop="15%"
                variant="caption"
                fontSize={10}
              >
                1000+
              </Typography>
            </Avatar>

            <img src={AvaImage} width={40} height={40} />

            <img src={AvaImage} width={40} height={40} />

            <img src={AvaImage} width={40} height={40} />

            <img src={AvaImage} width={40} height={40} />
            <Stack mt={{xs:-6 , sm:-10 , md:-1, lg:-8}}  >
              <img
                src={dir}
                style={{
                //   marginTop: {xs:-5},
                //   marginRight: "5px",
                  width: "200px",
                }}
              />
            </Stack> */}
            <Stack mt={{ md: -7, lg: 0 }} direction="row" columnGap={5}>
              <Button
                sx={{
                  backgroundColor: "#FF5A00",
                  width: "184px",
                  height: "56px",
                  color: "white",
                  marginTop: "-10px",

                  "&:hover": {
                    bgcolor: "#FF5A00",
                  },
                }}
              >
                مشاهده دوره ها
              </Button>
              <Button
                sx={{
                  border: "1px solid #FF5A00",
                  width: "184px",
                  height: "56px",
                  color: "black",
                  marginTop: "-10px",
                  "&:hover": {
                    bgcolor: "#fff",
                  },
                }}
              >
                درخواست مشاوره
              </Button>
            </Stack>
          </Stack>
        </Stack>

        <Stack mt={{ xs: -15, md: 0 }}>
          <img src={introImage} />
        </Stack>
      </Stack>

      <Stack
        direction="row"
        justifyContent="space-evenly"
        marginTop={5}
        sx={{ direction: "ltr" }}
        display={{ xs: "none", md: "flex" }}
      >
        <Stack justifyContent="center" alignItems="center">
          <Avatar
            sx={{
              backgroundColor: "#6A9FD1",
              borderRadius: "50%",
              width: "70px",
              height: "70px",
            }}
          >
            <img src={sweep} />
          </Avatar>
          <Typography noWrap>کاربردی و پروژه محور</Typography>
        </Stack>
        <Stack justifyContent="center" alignItems="center">
          <Avatar
            sx={{
              backgroundColor: "#6A9FD1",
              borderRadius: "50%",
              width: "70px",
              height: "70px",
            }}
          >
            <img src={display} />
          </Avatar>
          <Typography>ویدیوهای جامع و کامل</Typography>
        </Stack>
        <Stack justifyContent="center" alignItems="center">
          <Avatar
            sx={{
              backgroundColor: "#6A9FD1",
              borderRadius: "50%",
              width: "70px",
              height: "70px",
            }}
          >
            <img src={manage} />
          </Avatar>
          <Typography>پشتیبانی دائم</Typography>
        </Stack>
        <Stack justifyContent="center" alignItems="center">
          <Avatar
            sx={{
              backgroundColor: "#6A9FD1",
              borderRadius: "50%",
              width: "70px",
              height: "70px",
            }}
          >
            <img src={how} />
          </Avatar>
          <Typography>تضمین استخدام</Typography>
        </Stack>
        <Stack justifyContent="center" alignItems="center">
          <Avatar
            sx={{
              backgroundColor: "#6A9FD1",
              borderRadius: "50%",
              width: "70px",
              height: "70px",
            }}
          >
            <img src={diversity} />
          </Avatar>
          <Typography>آموزش منحصر به فرد</Typography>
        </Stack>
      </Stack>

      <Stack
        direction="row"
        justifyContent="center"
        columnGap={15}
        marginTop={5}
        sx={{ direction: "ltr" }}
        display={{ sm: "flex", sm: "none" }}
      >
        <Stack justifyContent="center" alignItems="center">
          <Avatar
            sx={{
              backgroundColor: "#6A9FD1",
              borderRadius: "50%",
              width: "70px",
              height: "70px",
            }}
          >
            <img src={sweep} />
          </Avatar>
          <Typography noWrap>کاربردی و پروژه محور</Typography>
        </Stack>
        <Stack justifyContent="center" alignItems="center">
          <Avatar
            sx={{
              backgroundColor: "#6A9FD1",
              borderRadius: "50%",
              width: "70px",
              height: "70px",
            }}
          >
            <img src={display} />
          </Avatar>
          <Typography>ویدیوهای جامع و کامل</Typography>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        marginTop={2}
        justifyContent="center"
        columnGap={20}
        sx={{ direction: "ltr" }}
        display={{ xs: "flex", sm: "none" }}
      >
        <Stack justifyContent="center" alignItems="center">
          <Avatar
            sx={{
              backgroundColor: "#6A9FD1",
              borderRadius: "50%",
              width: "70px",
              height: "70px",
            }}
          >
            <img src={manage} />
          </Avatar>
          <Typography>پشتیبانی دائم</Typography>
        </Stack>
        <Stack justifyContent="center" alignItems="center">
          <Avatar
            sx={{
              backgroundColor: "#6A9FD1",
              borderRadius: "50%",
              width: "70px",
              height: "70px",
            }}
          >
            <img src={how} />
          </Avatar>
          <Typography>تضمین استخدام</Typography>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-evenly"
        marginTop={2}
        sx={{ direction: "ltr" }}
        display={{ xs: "flex", sm: "none" }}
      >
        <Stack justifyContent="center" alignItems="center">
          <Avatar
            sx={{
              backgroundColor: "#6A9FD1",
              borderRadius: "50%",
              width: "70px",
              height: "70px",
            }}
          >
            <img src={diversity} />
          </Avatar>
          <Typography>آموزش منحصر به فرد</Typography>
        </Stack>
      </Stack>

      <Stack
        direction="row"
        justifyContent="center"
        columnGap={15}
        marginTop={5}
        sx={{ direction: "ltr" }}
        display={{ xs: "none", sm: "flex", md: "none" }}
      >
        <Stack justifyContent="center" alignItems="center">
          <Avatar
            sx={{
              backgroundColor: "#6A9FD1",
              borderRadius: "50%",
              width: "70px",
              height: "70px",
            }}
          >
            <img src={sweep} />
          </Avatar>
          <Typography noWrap>کاربردی و پروژه محور</Typography>
        </Stack>
        <Stack justifyContent="center" alignItems="center">
          <Avatar
            sx={{
              backgroundColor: "#6A9FD1",
              borderRadius: "50%",
              width: "70px",
              height: "70px",
            }}
          >
            <img src={display} />
          </Avatar>
          <Typography>ویدیوهای جامع و کامل</Typography>
        </Stack>
        <Stack justifyContent="center" alignItems="center">
          <Avatar
            sx={{
              backgroundColor: "#6A9FD1",
              borderRadius: "50%",
              width: "70px",
              height: "70px",
            }}
          >
            <img src={manage} />
          </Avatar>
          <Typography>پشتیبانی دائم</Typography>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        marginTop={2}
        justifyContent="center"
        columnGap={20}
        sx={{ direction: "ltr" }}
        display={{ xs: "none", sm: "flex", md: "none" }}
      >
        <Stack justifyContent="center" alignItems="center">
          <Avatar
            sx={{
              backgroundColor: "#6A9FD1",
              borderRadius: "50%",
              width: "70px",
              height: "70px",
            }}
          >
            <img src={how} />
          </Avatar>
          <Typography>تضمین استخدام</Typography>
        </Stack>
        <Stack justifyContent="center" alignItems="center">
          <Avatar
            sx={{
              backgroundColor: "#6A9FD1",
              borderRadius: "50%",
              width: "70px",
              height: "70px",
            }}
          >
            <img src={diversity} />
          </Avatar>
          <Typography>آموزش منحصر به فرد</Typography>
        </Stack>
      </Stack>
    </>
  );
}

export default Introduction;
