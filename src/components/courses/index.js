import {
  Card,
  Stack,
  Typography,
  CardMedia,
  CardContent,
  CardHeader,
  Button,
  alpha,
  Divider,
  Grid,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import courseImg from "images/courses.svg";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { addCommas, digitsEnToFa } from "@persian-tools/persian-tools";

function Courses() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  const handleCourseDetails = (course) => {
    navigate(`/course-details/${course.id}`, {
      state: { course },
    });
  };

  const url = "https://easycodey.org/api/courses.php";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        if (typeof response.data === "object" && response.data !== null) {
          setCourses(Object.values(response.data));
        } else {
          console.error(
            "Invalid data format. Expected an object:",
            response.data
          );
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchData();
  }, []);

  console.log(courses);

  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        marginTop="50px"
        marginRight="30px"
      >
        <img src={courseImg} />
        <Typography variant="subtitle1">جدیدترین دوره ها</Typography>
      </Stack>

      <Stack>
        <Grid
          container
          justifyContent={{ xs: "center", lg: "start" }}
          alignItems="center"
        >
          {courses?.map((course, index) => {
            const imageUrl = `https://easycodey.org/${course.image}`;
            return (
              <>
                <Grid item md={4} lg={3} xl={3}>
                  <Card
                    key={index}
                    elevation={6}
                    sx={{
                      width: 300,
                      border: "1px solid black",
                      margin: 2,
                      transition: "all 0.2s ease",
                      boxShadow: "0 0px 16px -8px #eaeaea",
                      "&:hover": {
                        border: "1px solid green",
                        zIndex: 1,
                        transform: "scale(1.02)",
                        transition: "all 0.3s ease",
                        boxShadow: `0 8px 8px -8px #ccc`,
                        marginTop: "10",
                      },
                    }}
                  >
                    <CardMedia
                      title={course.name}
                      image={imageUrl}
                      sx={{
                        height: 150,
                        width: "100%",
                        backgroundSize: "cover",
                      }}
                    />
                    <CardHeader
                      title={
                        <Typography
                          mb="-20px"
                          noWrap
                          color="black"
                          variant="subtitle1"
                        >
                          {course.name}
                        </Typography>
                      }
                    />

                    <CardContent>
                      <Stack direction="row" columnGap={3}>
                        <Stack
                          alignItems="center"
                          direction="row"
                          height={30}
                          width={100}
                          bgcolor="primary.lighter"
                          sx={{ borderRadius: 2, overflow: "hidden", px: 1 }}
                        >
                          <AccessAlarmsIcon
                            fontSize="small"
                            sx={{ color: "primary.main", height: "20px" }}
                          />
                          <Stack flex={1} alignItems="center">
                            <Typography
                              textAlign="center"
                              color="primary.dark"
                              fontWeight="bold"
                              fontSize={14}
                              variant="subtitle1"
                            >
                              {course.time} ساعت
                            </Typography>
                          </Stack>
                        </Stack>

                        <Stack
                          alignItems="center"
                          direction="row"
                          height={30}
                          width={100}
                          bgcolor="warning.lighter"
                          sx={{ borderRadius: 2, overflow: "hidden", px: 1 }}
                        >
                          <Diversity1Icon
                            fontSize="small"
                            sx={{ color: "warning.main", height: "20px" }}
                          />
                          <Stack flex={1} alignItems="center">
                            <Typography
                              textAlign="center"
                              color="warning.dark"
                              fontWeight="bold"
                              fontSize={14}
                              variant="subtitle1"
                            >
                              {course.support}
                            </Typography>
                          </Stack>
                        </Stack>
                      </Stack>

                      <Button
                        sx={{
                          mt: 2,
                          color: "#FF5A00",
                          "&:hover": {
                            backgroundColor: alpha("#FF5A00", 0.1),
                          },
                        }}
                        endIcon={<KeyboardBackspaceIcon sx={{ mr: 1 }} />}
                        onClick={() => handleCourseDetails(course)}
                      >
                        مشاهده اطلاعات دوره
                      </Button>
                      <Divider sx={{ mt: 1 }} />
                      <Stack direction="row" columnGap={5}>
                        <Button
                          variant="contained"
                          size="medium"
                          sx={{ mt: 2, width: "50%" }}
                        >
                          ثبت نام در دوره
                        </Button>
                        <Typography variant="subtitle1" mt={3} fontSize={12} noWrap>
                          {digitsEnToFa(addCommas(Number(course.price)))} تومان
                        </Typography>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              </>
            );
          })}
        </Grid>
      </Stack>
    </>
  );
}

export default Courses;
