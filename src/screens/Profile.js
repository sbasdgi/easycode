import Page from "components/Page";

import { AccountBalanceWalletRounded } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Stack,
  Grid,
  TextField,
  Typography,
  Divider,
} from "@mui/material";
//  import Image from "next/image";
//  import Link from "next/link";
import React from "react";
import avatar from "images/avatar.png";
// ----------------------------------------------------------------------

export default function Profile() {
  return (
    <Page title="dashboard">
      <Stack
        direction={{ xs: "column", md: "row" }}
        marginTop={5}
        rowGap={2}
        columnGap={2}
      >
        <Stack
          justifyContent="center"
          alignItems="stretch"
          gap={2}
          borderRadius={6}
          minWidth={220}
          minHeight={400}
          flex={2}
          padding={2}
          bgcolor="#f9f9f9"
        >
          <Typography variant="h6" paddingLeft={3}>
            جزئیات حساب
          </Typography>
          <Divider />
          <Stack
            justifyContent="center"
            alignItems="center"
            rowGap={1}
            columnGap={1}
            borderRadius={6}
            minWidth={220}
            flex={1}
            padding={4}
            bgcolor="#f9f9f9"
          >
            <img
              src={avatar}
              alt=""
              width={112}
              height={112}
              style={{ borderRadius: "50%", objectFit: "cover" }}
            />

            <form style={{ height: "100%" }}>
              <Stack height="100%" rowGap={1} columnGap={1} px={1}>
                <Grid container spacing={3} justifyContent="center">
                  <Grid item xs={12} lg={6}>
                    <TextField
                      label="نام"
                      name="name"
                      type="text"
                      fullWidth
                      margin="dense"
                      // onChange={handleChange}
                      // error={hasError("cellphone")}
                      // helperText={
                      //   hasError("cellphone")
                      //     ? formState.errors.cellphone[0]
                      //     : null
                      // }
                    />
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <TextField
                      label=" نام خانوادگی"
                      name="lastname"
                      type="text"
                      fullWidth
                      margin="dense"
                      // onChange={handleChange}
                      // error={hasError("cellphone")}
                      // helperText={
                      //   hasError("cellphone")
                      //     ? formState.errors.cellphone[0]
                      //     : null
                      // }
                    />
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <TextField
                      label="شماره تماس"
                      name="cellphone"
                      type="tel"
                      fullWidth
                      margin="dense"
                      // onChange={handleChange}
                      // error={hasError("cellphone")}
                      // helperText={
                      //   hasError("cellphone")
                      //     ? formState.errors.cellphone[0]
                      //     : null
                      // }
                    />
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <TextField
                      label="نام کاربری"
                      name="username"
                      type="text"
                      fullWidth
                      margin="dense"
                      // onChange={handleChange}
                      // value={formState.values.username}
                      // error={hasError("username")}
                      // helperText={
                      //   hasError("username")
                      //     ? formState.errors.username[0]
                      //     : null
                      // }
                    />
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <TextField
                      label="ایمیل"
                      name="email"
                      type="email"
                      fullWidth
                      margin="dense"
                      // onChange={handleChange}
                      // value={formState.values.email || ""}
                      // error={hasError("email")}
                      // helperText={
                      //   hasError("email") ? formState.errors.email[0] : null
                      // }
                    />
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <TextField
                      label="رمز عبور"
                      name="password"
                      type="password"
                      fullWidth
                      margin="dense"
                      // onChange={handleChange}
                      // value={formState.values.email || ""}
                      // error={hasError("email")}
                      // helperText={
                      //   hasError("email") ? formState.errors.email[0] : null
                      // }
                    />
                  </Grid>
                </Grid>
                <Stack rowGap={1} alignItems="center">
                  <Button
                    fullWidth
                    size="large"
                    type="submit"
                    color="primary"
                    variant="contained"
                    sx={{ mt: 2 }}
                    // disabled={!formState.isValid}
                    // onClick={handleSubmit}
                  >
                    ویرایش
                  </Button>
                </Stack>
              </Stack>
            </form>
          </Stack>
        </Stack>
      </Stack>
    </Page>
  );
}
