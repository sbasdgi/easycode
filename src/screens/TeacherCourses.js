import Page from "components/Page";
import {
  Card,
  CardHeader,
  IconButton,
  Stack,
  Tooltip,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Divider,
} from "@mui/material";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import { useState } from "react";
import TextIncreaseOutlinedIcon from "@mui/icons-material/TextIncreaseOutlined";
import PlayLessonIcon from "@mui/icons-material/PlayLesson";
import ModeEditRoundedIcon from "@mui/icons-material/ModeEditRounded";

// ----------------------------------------------------------------------

export default function TeacherCourses() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Page title="dashboard">
      <Stack
        justifyContent="center"
        alignItems="stretch"
        gap={2}
        borderRadius={6}
        minWidth={220}
        minHeight={30}
        flex={2}
        padding={2}
        marginTop={3}
        // bgcolor="#f9f9f9"
      >
        <Card
          sx={{
            bgcolor: "inherit",
            // border: "1px solid black",
            boxShadow: " 3px 3px #eaeaea",
          }}
        >
          <CardHeader
            // title={model.title}
            title={"دوره جامع HTML CSS مقدماتی تا پیشرفته"}
            sx={{ p: 1 }}
            subheader={
              <Typography fontSize={14} marginTop={1} variant="subtitle2">
                استاد صبا صدقی
              </Typography>
            }
            avatar={
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                columnGap={0.5}
                marginRight={2}
              >
                <PlayLessonIcon sx={{ color: "#3366FF" }} />
              </Stack>
            }
            action={
              <Stack
                direction={{ sx: "column", md: "row" }}
                justifyContent="center"
                alignItems="center"
                columnGap={1}
                rowGap={1}
              >
                <Tooltip title={"ویرایش"}>
                  <IconButton
                    size="large"
                    sx={{ bgcolor: "info.lighter", color: "info.dark" }}
                    color="info"
                    onClick={handleClickOpen}
                  >
                    <ModeEditRoundedIcon fontSize="small" color="info" />
                  </IconButton>
                </Tooltip>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                  sx={{ direction: "ltr" }}
                  maxWidth="xs"
                >
                  <DialogTitle id="alert-dialog-title">{"ویرایش"}</DialogTitle>
                  <DialogContent sx={{ minWidth: 300 }}>
                    {/* <Form formData={form} loading={loading} onSubmit={onSubmit} /> */}
                  </DialogContent>
                </Dialog>

                <Tooltip title="ویدیوها">
                  <IconButton
                    sx={{ bgcolor: "secondary.lighter" }}
                    size="large"
                    color="secondary"
                    onClick={handleClickOpen}
                  >
                    <VideoLibraryOutlinedIcon
                      color="secondary"
                      fontSize="small"
                    />
                  </IconButton>
                </Tooltip>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                  sx={{ direction: "ltr" }}
                  maxWidth="xs"
                >
                  <DialogTitle id="alert-dialog-title">
                    {"ویدیو ها"}
                  </DialogTitle>
                  <DialogContent sx={{ minWidth: 300 }}>
                    {/* <Form
                      formData={form}
                      loading={loading}
                      onSubmit={onSubmit}
                    /> */}
                  </DialogContent>
                </Dialog>
                <Tooltip title="حذف کردن">
                  <IconButton
                    sx={{ bgcolor: "error.lighter" }}
                    size="large"
                    color="error"
                    onClick={handleClickOpen}
                  >
                   
                      <TextIncreaseOutlinedIcon color="error" fontSize="small" />
                    
                  </IconButton>
                </Tooltip>
                <Dialog
                  open={open}
                  maxWidth="sm"
                  onClose={handleClose}
                  sx={{ direction: "ltr" }}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">
                    آیا از حذف این مورد مطمئن هستید؟
                  </DialogTitle>
                  <DialogContent
                    sx={{ minWidth: { xs: 300, sm: 480 } }}
                  ></DialogContent>
                  
                </Dialog>
              </Stack>
            }
          />
        </Card>
      </Stack>
    </Page>
  );
}
