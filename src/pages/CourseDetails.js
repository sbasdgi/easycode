import {
  Avatar,
  Button,
  Stack,
  Typography,
  Accordion,
  AccordionActions,
  AccordionSummary,
  AccordionDetails,
  alpha,
} from "@mui/material";
import { Footer, Header } from "components";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import { addCommas, digitsEnToFa } from "@persian-tools/persian-tools";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";

function CourseDetails() {
  function scrollToDescription() {
    const descriptionSection = document.getElementById("description");

    if (descriptionSection) {
      descriptionSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  function scrollToCourses() {
    const coursesSection = document.getElementById("courses");

    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  function scrollToTexts() {
    const textSection = document.getElementById("texts");

    if (textSection) {
      textSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  const location = useLocation();
  const course = location?.state?.course;
  const imageUrl = `https://easycodey.org/${course.image}`;

  const [parts, setParts] = useState([]);
  const [episode, setEpisode] = useState([]);
  const [teacher, setTeacher] = useState([]);
  const [texts, setTexts] = useState([]);

  const [partId, setPartId] = useState([]);

  const courseId = course.id;
  const teacherId = course.teacher_id;

  function fetchTexts() {
    fetch("https://easycodey.org/api/course_text.php")
      .then((response) => response.json())
      .then((data) => {
        const matchingTexts = [];

        for (const item of Object.values(data)) {
          if (item.course_id === courseId) {
            matchingTexts.push({
              title: item.title,
              text: item.text,
            });
          }
        }

        if (matchingTexts.length > 0) {
          setTexts(matchingTexts);
        } else {
          console.log("No matching texts found for the specified ID");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function fetchTeacher() {
    fetch("https://easycodey.org/api/teachers.php")
      .then((response) => response.json())
      .then((data) => {
        const matchingTeachers = [];

        for (const item of Object.values(data)) {
          if (item.user_id === teacherId) {
            matchingTeachers.push({
              bio: item.bio,
              image: item.teacher_image,
            });
          }
        }

        if (matchingTeachers.length > 0) {
          console.log(matchingTeachers.map((m) => m.image));
          setTeacher(matchingTeachers);
        } else {
          console.log("No matching texts found for the specified ID");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function fetchParts() {
    fetch(" https://easycodey.org/api/part.php")
      .then((response) => response.json())
      .then((data) => {
        const matchingParts = [];

        for (const item of Object.values(data)) {
          if (item.course_id === courseId) {
            matchingParts.push({
              partId: item.id,
              partName: item.part_name,
            });
          }
        }

        if (matchingParts.length > 0) {
          setParts(matchingParts);
        } else {
          console.log("No matching texts found for the specified ID");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
  useEffect(() => {
    parts.map((part) => {
      setPartId(part.partId);
    });
  }, [parts]);

  useEffect(() => {
    if (partId) {
      fetchEpisode();
    }
  }, [partId]);

  function fetchEpisode() {
    fetch("https://easycodey.org/api/episode.php")
      .then((response) => response.json())
      .then((data) => {
        const matchingEpisodes = [];

        for (const item of Object.values(data)) {
          if (item.part_id === partId) {
            matchingEpisodes.push({
              name: item.name,
              time: item.time,
              show: item.show_video,
              link: item.link,
            });
          }
        }

        if (matchingEpisodes) {
          setEpisode(matchingEpisodes);
        } else {
          console.log("No matching texts found for the specified ID");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    fetchTexts();
  }, []);

  useEffect(() => {
    fetchParts();
  }, []);
  useEffect(() => {
    fetchTeacher();
  }, []);

  return (
    <>
      <Header />
      <Stack
        direction={{ xs: "column", lg: "row" }}
        margin={{ xs: 4, lg: 8 }}
        bgcolor="#fff"
        borderRadius={2}
        padding={4.5}
        sx={{
          boxShadow: "rgba(94, 129, 209, 0.16) 0px 8px 24px",
        }}
      >
        <Stack width={{ xs: "100%", lg: "50%" }}>
          <Typography fontWeight="bold" component="h1" fontSize={20}>
            {course.name}
          </Typography>
          <Typography component="h3" fontSize={20} marginTop={2}>
            {course.discription}
          </Typography>
          <Stack
            direction="row"
            columnGap={5}
            rowGap={2}
            justifyContent="cennter"
            alignItems="center"
            margin={{ md: "auto", lg: 0 }}
            marginTop={{ xs: 2, lg: 1, xl: 12 }}
          >
            <Stack
              alignItems="center"
              direction={{ xs: "column", lg: "row" }}
              height={80}
              width={230}
              bgcolor="primary.lighter"
              padding={{ xs: 1 }}
              sx={{ borderRadius: 2, overflow: "hidden", px: 1 }}
            >
              <Avatar sx={{ bgcolor: "primary.main" }}>
                <AccessAlarmsIcon fontSize="small" sx={{ color: "#fff" }} />{" "}
              </Avatar>

              <Stack flex={1} alignItems="center">
                <Typography
                  textAlign="center"
                  color="primary.dark"
                  fontWeight="bold"
                  fontSize={15}
                  display={{ xs: "none", lg: "flex" }}
                  variant="subtitle1"
                >
                  زمان دوره
                </Typography>
                <Typography
                  textAlign="center"
                  // color="primary.dark"
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
              height={80}
              width={220}
              direction={{ xs: "column", lg: "row" }}
              bgcolor="primary.lighter"
              sx={{ borderRadius: 2, overflow: "hidden", px: 1 }}
              padding={{ xs: 1 }}
            >
              <Avatar sx={{ bgcolor: "primary.main" }}>
                <Diversity1Icon fontSize="small" sx={{ color: "#fff" }} />{" "}
              </Avatar>

              <Stack flex={1} alignItems="center">
                <Typography
                  textAlign="center"
                  color="primary.dark"
                  fontWeight="bold"
                  fontSize={15}
                  variant="subtitle1"
                  display={{ xs: "none", lg: "flex" }}
                >
                  پشتیبانی
                </Typography>
                <Typography
                  textAlign="center"
                  fontWeight="bold"
                  fontSize={14}
                  variant="subtitle1"
                >
                  {course.support}
                </Typography>
              </Stack>
            </Stack>

            <Stack
              alignItems="center"
              direction={{ xs: "column", lg: "row" }}
              height={80}
              width={220}
              bgcolor="primary.lighter"
              sx={{ borderRadius: 2, overflow: "hidden", px: 1 }}
              padding={{ xs: 1 }}
            >
              <Avatar sx={{ bgcolor: "primary.main" }}>
                <GroupOutlinedIcon fontSize="small" sx={{ color: "#fff" }} />{" "}
              </Avatar>

              <Stack flex={1} alignItems="center">
                <Typography
                  textAlign="center"
                  color="primary.dark"
                  fontWeight="bold"
                  fontSize={15}
                  display={{ xs: "none", lg: "flex" }}
                  variant="subtitle1"
                >
                  تعداد دانشجو
                </Typography>
                <Typography
                  textAlign="center"
                  // color="primary.dark"
                  fontWeight="bold"
                  fontSize={14}
                  variant="subtitle1"
                >
                  322 نفر
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          width={{ xs: "100%", lg: "50%" }}
          margin={{ lg: 2 }}
          mt={{ xs: 2, lg: 0 }}
        >
          <img src={imageUrl} style={{ borderRadius: "10px" }} />
        </Stack>
      </Stack>

      <Stack
        marginRight={{ xs: 4, lg: 8 }}
        marginLeft={{ xs: 4, lg: 8 }}
        justifyContent="center"
        alignItems="center"
        columnGap={10}
        rowGap={5}
        zIndex={1}
        direction="row"
        bgcolor="#fff"
        borderRadius={2}
        marginTop={-2}
        padding={2}
        sx={{
          boxShadow: "rgba(94, 129, 209, 0.16) 0px 4px 24px",
        }}
      >
        <Stack width="33.33%" justifyContent="center" alignItems="center">
          <Button
            onClick={scrollToDescription}
            fontSize={16}
            fontWeight="bold"
            noWrap
          >
            توضیحات
          </Button>
        </Stack>
        <Stack width="33.33%" justifyContent="center" alignItems="center">
          <Button
            onClick={scrollToCourses}
            fontSize={16}
            fontWeight="bold"
            noWrap
          >
            جلسات
          </Button>
        </Stack>
        <Stack
          width="33.33%"
          justifyContent="center"
          alignItems="center"
          fontSize={16}
        >
          <Button
            onClick={scrollToTexts}
            fontSize={16}
            noWrap
            fontWeight="bold"
          >
            سوالات متداول
          </Button>
        </Stack>
      </Stack>

      <Stack
        marginRight={{ xs: 4, lg: 8 }}
        marginLeft={{ xs: 4, lg: 8 }}
        direction={{ xs: "column-reverse", md: "row" }}
        justifyContent="center"
        alignItems="center"
        columnGap={2}
        rowGap={5}
        marginTop={4}
      >
        <Stack
          bgcolor="#fff"
          borderRadius={2}
          padding={3}
          sx={{
            boxShadow: "rgba(94, 129, 209, 0.16) 0px 4px 24px",
          }}
          width={{ xs: "100%", md: "70%" }}
          rowGap={2}
          zIndex={2}
        >
          <Typography id="description" color="primary.main" variant="h6">
            توضیحات
          </Typography>
          <Typography variant="body1">{course.discription}</Typography>
        </Stack>
        <Stack
          bgcolor="#fff"
          borderRadius={2}
          padding={4.5}
          marginTop={2}
          justifyContent="center"
          alignItems="center"
          sx={{
            boxShadow: "rgba(94, 129, 209, 0.16) 0px 4px 24px",
          }}
          width={{ xs: "100%", md: "30%" }}
        >
          <Typography variant="subtitle1" fontSize={20} fontWeight="bold">
            {digitsEnToFa(addCommas(Number(course.price)))}{" "}
            <span style={{ fontSize: "12px" }}> تومان </span>
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{ mt: 2, width: "100%" }}
          >
            ثبت نام در دوره
          </Button>
        </Stack>
      </Stack>

      <Stack
        marginRight={{ xs: 4, lg: 8 }}
        marginLeft={{ xs: 4, lg: 8 }}
        direction={{ xs: "column-reverse", md: "row" }}
        justifyContent="center"
        alignItems="center"
        columnGap={2}
        rowGap={5}
      >
        <Stack
          bgcolor="#fff"
          borderRadius={2}
          padding={3}
          marginTop={{ md: 2 }}
          sx={{
            boxShadow: "rgba(94, 129, 209, 0.16) 0px 4px 24px",
            alignSelf: "flex-start",
          }}
          width={{ xs: "100%", md: "70%" }}
          rowGap={2}
          zIndex={1}
        >
          <Typography id="courses" color="primary.main" variant="h6">
            سرفصل ها
          </Typography>
          {parts.map((part) => (
            <Accordion
              key={part.id}
              sx={{
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                borderRadius: "20px",
                marginBottom: "20px",
              }}
            >
              <AccordionSummary
                sx={{
                  padding: "5px 20px",
                  boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px",
                  borderRadius: "10px !important",
                }}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Stack
                  direction="row"
                  width="100%"
                  justifyContent="space-between"
                >
                  <Stack>
                    <Typography>{part.partName}</Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    bgcolor="primary.lighter"
                    borderRadius={5}
                    width={{ xs: "35%", sm: "20%", lg: "15%" }}
                    height="30px"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Typography color="primary.main">
                      {digitsEnToFa(episode.length)} جلسه
                    </Typography>
                    <ExpandMoreIcon style={{ color: "#3368FF" }} />
                  </Stack>
                </Stack>
              </AccordionSummary>
              {episode.map((epi, index) => (
                <AccordionDetails
                  sx={{
                    padding: "10px 10px",
                    border: "1px solid rgba(100, 100, 111, 0.2)",
                    margin: "15px",
                    borderRadius: "8px",
                  }}
                >
                  <Accordion key={index}>
                    <AccordionSummary
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <Stack
                        direction="row"
                        width="100%"
                        justifyContent="space-between"
                      >
                        <Stack direction="row" columnGap={2}>
                          <Typography
                            borderRadius="50%"
                            width={25}
                            height={25}
                            bgcolor={alpha("#FF5A00", 0.2)}
                            color="#FF5A00"
                            textAlign="center"
                          >
                            {digitsEnToFa(index + 1)}
                          </Typography>
                          <Typography>{epi.name}</Typography>
                        </Stack>

                        <Stack direction="row" columnGap={1}>
                          {epi.show === "رایگان" && (
                            <Stack
                              bgcolor="success.lighter"
                              borderRadius={5}
                              height="30px"
                              justifyContent="center"
                              padding={1}
                              alignItems="center"
                            >
                              <LockOpenOutlinedIcon
                                fontSize="25px"
                                sx={{ color: "success.main" }}
                              />
                            </Stack>
                          )}
                          <Stack
                            bgcolor={alpha("#FF5A00", 0.2)}
                            borderRadius={5}
                            height="30px"
                            justifyContent="center"
                            padding={1}
                            alignItems="center"
                          >
                            <Typography fontSize={14} color="#FF5A00">
                              {epi.time}
                            </Typography>
                          </Stack>
                        </Stack>
                      </Stack>
                    </AccordionSummary>
                    <AccordionDetails>
                      <video
                        width="100%"
                        controls
                        src={`https://easycodey.org/${epi.link}`}
                      />
                    </AccordionDetails>
                  </Accordion>
                </AccordionDetails>
              ))}
            </Accordion>
          ))}
        </Stack>

        <Stack
          bgcolor="#fff"
          borderRadius={2}
          padding={4.5}
          marginTop={2}
          justifyContent="center"
          alignItems="center"
          sx={{
            boxShadow: "rgba(94, 129, 209, 0.16) 0px 4px 24px",
            alignSelf: "flex-start",
          }}
          width={{ xs: "100%", md: "30%" }}
          rowGap={2}
        >
          {teacher.map((teach) => (
            <>
              <img
                width={150}
                height={150}
                style={{ borderRadius: "50%" }}
                src={`https://easycodey.org/${teach.image}`}
              />
              <Typography variant="h3">نام مدرس</Typography>
              <Typography>{teach.bio}</Typography>
            </>
          ))}
        </Stack>
      </Stack>

      <Stack
        marginRight={{ xs: 4, lg: 12 }}
        marginLeft={{ xs: 4, lg: 8 }}
        mt={2}
        columnGap={2}
        rowGap={5}
      >
        <Stack
          bgcolor="#fff"
          borderRadius={2}
          padding={3}
          sx={{
            boxShadow: "rgba(94, 129, 209, 0.16) 0px 4px 24px",
            alignSelf: "flex-start",
          }}
          width={{ xs: "100%", md: "70%" }}
          rowGap={2}
          zIndex={1}
        >
          <Typography id="texts" color="primary.main" variant="h6">
            سوالات متداول
          </Typography>
          {texts.map((text) => (
            <Accordion
              key={text.id}
              sx={{
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            >
              <AccordionSummary
                sx={{
                  padding: "5px 10px",
                  boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px",
                  borderRadius: "10px !important",
                }}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Stack
                  direction="row"
                  width="100%"
                  justifyContent="space-between"
                >
                  <Stack>
                    <Typography>{text.title}</Typography>
                  </Stack>
                  <Stack justifyContent="center" alignItems="center">
                    <ExpandMoreIcon style={{ color: "#3368FF" }} />
                  </Stack>
                </Stack>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  padding: "10px 10px",
                }}
              >
                <Stack direction="row" justifyContent="space-between">
                  <Typography>{text.text}</Typography>
                </Stack>
              </AccordionDetails>
            </Accordion>
          ))}
        </Stack>
      </Stack>

      <Footer />
    </>
  );
}

export default CourseDetails;
