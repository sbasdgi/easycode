import Page from "components/Page";
import {
  Card,
  Stack,
  Typography,
  CardMedia,
  CardContent,
  CardActionArea,
  CardHeader,
  Avatar,
  Button,
  alpha,
  Divider,
  Grid,
} from "@mui/material";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
import courseImg from "images/courses.svg";

import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";

import Diversity1Icon from "@mui/icons-material/Diversity1";

import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

// ----------------------------------------------------------------------

export default function Pishkhan() {
  const priceInfo = () => (
    <Stack
      alignItems="center"
      direction="row"
      columnGap={1}
      height={80}
      width={{ md: "30%", xs: "48%" }}
      bgcolor="error.lighter"
      sx={{ borderRadius: 2, overflow: "hidden", px: 1 }}
    >
      <Avatar sx={{ bgcolor: "error.main" }}>
        <CreditScoreOutlinedIcon fontSize="small" color="#fff" />
      </Avatar>
      <Stack flex={1} alignItems="center">
        <Typography
          textAlign="center"
          color="error.dark"
          fontWeight="bold"
          fontSize={15}
          variant="subtitle1"
        >
          مجموع پرداخت ها
        </Typography>
        <Typography
          fontWeight="bold"
          fontSize={15}
          variant="subtitle1"
        ></Typography>
      </Stack>
    </Stack>
  );

  const brandInfo = () => (
    <Stack
      // justifyContent="space-between"
      alignItems="center"
      direction="row"
      columnGap={1}
      height={80}
      width={{ md: "30%", xs: "48%" }}
      bgcolor="success.lighter"
      sx={{ borderRadius: 2, overflow: "hidden", px: 1 }}
    >
      <Avatar sx={{ bgcolor: "success.main" }}>
        <VerifiedRoundedIcon fontSize="small" color="#fff" />
      </Avatar>
      <Stack flex={1} alignItems="center">
        <Typography
          textAlign="center"
          color="success.dark"
          fontWeight="bold"
          fontSize={15}
          variant="subtitle1"
        >
          دوره های من
        </Typography>
        <Typography
          fontWeight="bold"
          fontSize={15}
          variant="subtitle1"
        ></Typography>
      </Stack>
    </Stack>
  );

  const shopInfo = () => (
    <>
      <Avatar sx={{ bgcolor: "warning.light", color: "warning.dark" }}></Avatar>
      <Stack flex={1} alignItems="center">
        <Typography
          textAlign="center"
          color="warning.dark"
          fontWeight="bold"
          fontSize={15}
          variant="subtitle1"
        >
          موجودی حساب
        </Typography>
        <Typography
          textAlign="center"
          fontWeight="bold"
          fontSize={15}
          variant="subtitle1"
        ></Typography>
      </Stack>
    </>
  );

  return (
    <Page title="dashboard">
      <Stack direction="row" justifyContent="space-between" marginTop={4}>
        {priceInfo()}
        {brandInfo()}
        <Stack
          alignItems="center"
          direction="row"
          columnGap={1}
          height={80}
          width="30%"
          bgcolor="warning.lighter"
          sx={{ borderRadius: 2, overflow: "hidden", px: 1 }}
          display={{ xs: "none", md: "flex" }}
        >
          {shopInfo()}
        </Stack>
      </Stack>
      <Stack
        alignItems="center"
        direction="row"
        columnGap={1}
        height={60}
        width={{ md: "60%", xs: "100%" }}
        bgcolor="warning.lighter"
        sx={{ borderRadius: 2, overflow: "hidden", px: 1 }}
        display={{ xs: "flex", md: "none" }}
      >
        {shopInfo()}
      </Stack>
      <Grid container spacing={3}>
        {/* {courses.map((course, index) => {
            return (
              <> */}
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Card
            elevation={6}
            sx={{
              width: {xs:'100%' , sm:'100%'},
              border: "1px solid black",
              transition: "all 0.2s ease",
              boxShadow: "0 0px 16px -8px #eaeaea",
              marginTop: "25px",
              "&:hover": {
                zIndex: 1,
                transform: "scale(1.02)",
                transition: "all 0.3s ease",
                boxShadow: `0 8px 8px -8px #ccc`,
              },
            }}
          >
            <CardMedia
              // title={course.name}
              // image={productImgUrl(course.image)}
              image={courseImg}
              sx={{
                height: 150,
                width: "100%",
                backgroundSize: "contain",
              }}
            />
            <CardHeader
              title={
                <Typography
                  width={200}
                  mb="-20px"
                  noWrap
                  color="black"
                  variant="subtitle1"
                >
                  {/* {course.name} */}
                  آموزش مقدماتی جاوا
                </Typography>
              }
            />

            <CardContent>
              <Stack direction="row" columnGap={3}>
                <Button
                  variant="contained"
                  size="medium"
                  sx={{ width: "100%" }}
                  
                >
                  مشاهده دوره
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

       
        {/* </>
            );
          })} */}
      </Grid>
    </Page>
  );
}
