import { Divider, Link, Stack, Typography, alpha } from "@mui/material";
import React from "react";
import footer from "images/footer.svg";
import logo from "images/logo.svg";
import line from "images/line.svg";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";

function Footer() {
  return (
    <Stack
      sx={{
        backgroundImage: `url(${footer})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        mt: 3,
        pb: 3,
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        columnGap={20}
        justifyContent="space-between"
        padding={5}
      >
        <Stack
          display={{ xs: "none", lg: "flex" }}
          width="43.33%"
        >
          <img
            src={logo}
            width="170px"
            height="44px"
            style={{ marginTop: "55px" }}
          />
          <Typography variant="body1" mt={2} mr={5}>
            هدف ایزی کد ارائه بهترین خدمات آموزشی به دانشجویان برای ورود به
            بازار کار است.
            <br />و برای رسیدن به این هدف یکسری استانداردها تعیین شده و به صورت
            سختگیرانه روی دوره اعمال میشود. این استاندارد ها شامل تدریس سلیس و
            روان برای انتقال مفاهیم در کنار کامل و جامع بودن دوره است به صورتی
            که شما با دیدن یک دوره به سطح مناسب و حرفه‌ای برسید
          </Typography>
        </Stack>

        <Stack
          display={{ xs: "none", md: "flex" }}
          width="23.33%"
          direction="column"
          mr={10}
        >
          <Typography variant="h5" mt={8}>
            ارتباط با ما
          </Typography>
          <img src={line} style={{ width: "90px", marginTop: "9px" }} />
          <Typography variant="body1" mt={2}>
            آدرس:
            <br />
            کرمان_بلوار هوانیروز_خیابان یاس
          </Typography>
          <Stack direction="row" columnGap={1} mt={5}>
            <EmailOutlinedIcon
              fontSize="small"
              style={{ color: alpha("#26264F", 0.57) }}
            />
            <Typography style={{ color: alpha("#26264F", 0.57) }}>
              easycode402@gmail.com
            </Typography>
          </Stack>
          <Stack direction="row" columnGap={1} mt={5}>
            <PhoneEnabledOutlinedIcon
              fontSize="small"
              style={{ color: alpha("#26264F", 0.57) }}
            />
            <Typography style={{ color: alpha("#26264F", 0.57) }}>
              03444211589
            </Typography>
          </Stack>
        </Stack>
        <Stack
          display={{ xs: "none", md: "flex" }}
          width="33.33%"
          direction="column"
        >
          <Typography variant="h5" mt={8}>
            دسترسی سریع
          </Typography>
          <img src={line} style={{ width: "90px", marginTop: "9px" }} />
          <Link underline="none" color="black" mt={2}>
            برو به بالا
          </Link>
          <Link underline="none" color="black" mt={2}>
            صفحه اصلی
          </Link>
          <Link underline="none" color="black" mt={2}>
            بلاگ
          </Link>
          <Link underline="none" color="black" mt={2}>
            تماس با ما
          </Link>
          <Link underline="none" color="black" mt={2}>
            درباره ما
          </Link>
        </Stack>
      </Stack>

      <Stack direction={"row"} display={{ xs: "flex", md: "none" }}>
        <Stack width="50%" direction="column" mr={8}>
          <Typography variant="h5">ارتباط با ما</Typography>
          <img src={line} style={{ width: "90px", marginTop: "9px" }} />
          <Typography variant="body1" mt={2}>
            آدرس:
            <br />
            کرمان_بلوار هوانیروز_خیابان یاس
          </Typography>
          <Stack direction="row" columnGap={1} mt={5}>
            <EmailOutlinedIcon
              fontSize="small"
              style={{ color: alpha("#26264F", 0.57) }}
            />
            <Typography style={{ color: alpha("#26264F", 0.57) }}>
              easycode402@gmail.com
            </Typography>
          </Stack>
          <Stack direction="row" columnGap={1} mt={5}>
            <PhoneEnabledOutlinedIcon
              fontSize="small"
              style={{ color: alpha("#26264F", 0.57) }}
            />
            <Typography style={{ color: alpha("#26264F", 0.57) }}>
              03444211589
            </Typography>
          </Stack>
        </Stack>
        <Stack width="50%" direction="column">
          <Typography variant="h5">دسترسی سریع</Typography>
          <img src={line} style={{ width: "90px", marginTop: "9px" }} />
          <Link underline="none" color="black" mt={2}>
            برو به بالا
          </Link>
          <Link underline="none" color="black" mt={2}>
            صفحه اصلی
          </Link>
          <Link underline="none" color="black" mt={2}>
            بلاگ
          </Link>
          <Link underline="none" color="black" mt={2}>
            تماس با ما
          </Link>
          <Link underline="none" color="black" mt={2}>
            درباره ما
          </Link>
        </Stack>
        <Stack
          display={{ xs: "none", md: "flex" }}
          width="23.33%"
          direction="column"
          mr={8}
        >
          <Typography variant="h5" mt={8}>
            ارتباط با ما
          </Typography>
          <img src={line} style={{ width: "90px", marginTop: "9px" }} />
          <Typography variant="body1" mt={2}>
            آدرس:
            <br />
            کرمان_بلوار هوانیروز_خیابان یاس
          </Typography>
          <Stack direction="row" columnGap={1} mt={5}>
            <EmailOutlinedIcon
              fontSize="small"
              style={{ color: alpha("#26264F", 0.57) }}
            />
            <Typography style={{ color: alpha("#26264F", 0.57) }}>
              easycode402@gmail.com
            </Typography>
          </Stack>
          <Stack direction="row" columnGap={1} mt={5}>
            <PhoneEnabledOutlinedIcon
              fontSize="small"
              style={{ color: alpha("#26264F", 0.57) }}
            />
            <Typography style={{ color: alpha("#26264F", 0.57) }}>
              03444211589
            </Typography>
          </Stack>
        </Stack>
        <Stack
          display={{ xs: "none", md: "flex" }}
          width="33.33%"
          direction="column"
        >
          <Typography variant="h5" mt={8}>
            دسترسی سریع
          </Typography>
          <img src={line} style={{ width: "90px", marginTop: "9px" }} />
          <Link underline="none" color="black" mt={2}>
            برو به بالا
          </Link>
          <Link underline="none" color="black" mt={2}>
            صفحه اصلی
          </Link>
          <Link underline="none" color="black" mt={2}>
            بلاگ
          </Link>
          <Link underline="none" color="black" mt={2}>
            تماس با ما
          </Link>
          <Link underline="none" color="black" mt={2}>
            درباره ما
          </Link>
        </Stack>
      </Stack>
      <Divider />
      <Stack justifyContent="center" alignItems="center">
        <Typography
          mt={2}
          variant="caption"
          fontSize={15}
          color={alpha("#26264F", 0.5)}
        >
          جهت اطلاع از آخرین اخبار دوره‌ها ایمیل خود را وارد کنید
        </Typography>
        <input
          type="email"
          placeholder="ایمیل خود را وارد کنید"
          height="28px"
          style={{
            borderRadius: "10px",
            border: "1px solid #6A9FD1",
            width: "280px",
            marginTop: "5px",

            padding: "5px",
          }}
        />
        <input
          type="submit"
          value="ثبت"
          style={{
            borderRadius: "10px",
            backgroundColor: "#FF5A00",
            width: "150px",
            marginTop: "5px",
            color: "white",
            padding: "10px",
          }}
        />
      </Stack>
    </Stack>
  );
}

export default Footer;
