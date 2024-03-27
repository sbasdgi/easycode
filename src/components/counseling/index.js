import { Stack, Typography } from "@mui/material";
import React from "react";
import headset from "images/headset_mic.svg";

function Counseling() {
  return (
    <>
      <Stack
        height="258px"
        bgcolor="#FF5A00"
        borderRadius="25px"
        marginTop={5}
        marginBottom={5}
        marginRight={2}
        marginLeft={2}
        direction={{ xs: "column", md: "row" }}
      >
        <Stack display={{ xs: "none", md: "flex" }}>
          <img
            src={headset}
            width={150}
            height={145}
            style={{ marginTop: "15px", marginRight: "8px" }}
          />
        </Stack>
        <Stack>
          
          <Typography
            color="#fff"
            variant="body2"
            fontSize={20}
            mt={{ xs: 1 , md:5}}
            textAlign={{ xs: "center", lg: "start" }}
            mr={2}
          >
            اگه نیاز به مشورت و مشاوره رایگان داری
            <br />
            اطلاعاتت رو وارد کن تا بهت زنگ بزنیم
          </Typography>
        </Stack>
        <Stack justifyContent='center' alignItems='center' > 
          <form>
            <input
              style={{
                borderRadius: "25px",
                padding: "15px",
                width: "336px",
                height: "48px",
                border: "none",
              }}
              type="text"
              placeholder="نام و نام خانوداگی"
            />
            <br />
            <br />
            <input
              style={{
                borderRadius: "25px",
                padding: "15px",
                width: "336px",
                height: "48px",
                border: "none",
              }}
              type="text"
              placeholder="شماره تماس"
            />
            <br />
            <input
              style={{
                borderRadius: "10px",
                width: "100px",
                height: "35px",
                marginTop: "25px",
                backgroundColor: "#fff",
                border: "none",
              }}
              type="submit"
              value="ثبت اطلاعات"
            />
          </form>
        </Stack>
      </Stack>
    </>
  );
}

export default Counseling;
