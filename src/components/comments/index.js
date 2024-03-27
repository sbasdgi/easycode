import React from "react";
import courseImg from "images/courses.svg";
import {
  Stack,
  Typography,
  Button,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Avatar,
  Divider,
  Rating,
  Grid,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

function Comments() {
  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        // marginTop="50px"
        // marginRight="30px"
        margin={2}
      >
        <img src={courseImg} />
        <Typography variant="subtitle1">نظرات دانشجویان</Typography>
      </Stack>
      <Stack justifyContent="center" alignItems="center" margin={2}>
        <Grid
          container
          direction="row"
          boxShadow="1px 1px 5px gray"
          margin={2}
          borderRadius="25px"
          // justifyContent='center'
          // alignItems='center'
        >
          <>
            <Grid item md={4} lg={3} xl={3}>
              <Card
                elevation={6}
                sx={{
                  width: 250,
                  border: "1px solid black",
                  margin: 2,
                  padding: 0.5,
                  transition: "all 0.2s ease",
                  boxShadow: "0 0px 16px -8px #eaeaea",
                }}
              >
                <CardHeader
                  title={
                    <Stack direction="row" columnGap={1} mr={1}>
                      <ThumbUpOutlinedIcon
                        fontSize="small"
                        style={{ color: "#1DAB1D" }}
                      />

                      <Typography
                        width={200}
                        noWrap
                        color="#1DAB1D"
                        fontSize={14}
                        textAlign="start"
                        variant="subtitle1"
                      >
                        پیشنهاد میکنم
                      </Typography>
                    </Stack>
                  }
                />
                <CardContent sx={{ mt: -3 }}>
                  <Stack direction="row" mb={1}>
                    <AccountCircleOutlinedIcon fontSize="large" />
                    <Stack flex={1}>
                      <Typography
                        fontWeight="bold"
                        fontSize={14}
                        variant="subtitle1"
                      >
                        ثنا نصوحی
                        {/* {user.comment} */}
                      </Typography>
                      <Typography
                        fontWeight="bold"
                        fontSize={10}
                        variant="caption"
                      >
                        {/* {time} */}
                        1402/12/20
                      </Typography>
                    </Stack>
                  </Stack>
                  <Typography fontSize={12} variant="caption">
                    دانشجوی دوره HTML CSS
                  </Typography>

                  <Divider sx={{ mt: 1 }} />

                  <Stack direction="column" rowGap={1} mt={1}>
                    <Rating
                      sx={{
                        margin: "auto",
                      }}
                      value={5}
                      name="read-only"
                      readOnly
                    />
                    <Typography>
                      {/* {user.comment} */}
                      من سه ماه پیش دوره های طراحی رو شرکت کردم، پشتیبانی دوره
                      واقعا عالی بود. از لحظه به لحظه دوره لذت بردم و الانم منجر
                      به کار پیدا کردن من شد.
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </>
          {/* ); */}
          {/* })} */}
        </Grid>
      </Stack>
    </>
  );
}

export default Comments;
