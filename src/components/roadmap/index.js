import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import courseImg from "images/courses.svg";
import { Stack, Button, alpha } from "@mui/material";
import road from "images/roadpng.png";

function Roadmap() {
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  }
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        margin={2}
      >
        <img src={courseImg} />
        <Typography variant="subtitle1">نقشه راه ها</Typography>
      </Stack>

      <Box
        sx={{
          flexGrow: 1,
          marginRight: "40px",
          marginTop: 1,
          bgcolor: "background.paper",
          display: "flex",
          height: 320,
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{
            borderRight: 1,
            borderColor: "divider",
          }}
        >
          <Tab
            label={
              <Button
                variant="contained"
                sx={{
                  width:{xs:'100px' , sm:'150px' , md:'200px' , lg:'300px'},
                  bgcolor: "#6A9FD1",
                  height: "50px",
                  boxShadow: "none",
                  "&:focus": {
                    backgroundColor: "#FF5A00",
                  },
                }}
              >
                فرانت اند
              </Button>
            }
            {...a11yProps(0)}
          ></Tab>
          <Tab
            label={
              <Button
                variant="contained"
                sx={{
                  width:{xs:'100px' , sm:'150px' , md:'200px' , lg:'300px'},
                  height: "50px",
                  bgcolor: "#6A9FD1",

                  "&:focus": {
                    backgroundColor: "#FF5A00",
                  },
                }}
              >
                بک اند
              </Button>
            }
            {...a11yProps(1)}
          />
          <Tab
            label={
              <Button
                variant="contained"
                sx={{
                  width:{xs:'100px' , sm:'150px' , md:'200px' , lg:'300px'},
                  height: "50px",
                  bgcolor: "#6A9FD1",

                  "&:focus": {
                    backgroundColor: "#FF5A00",
                  },
                }}
              >
                امنیت
              </Button>
            }
            {...a11yProps(2)}
          />
          <Tab
            label={
              <Button
                variant="contained"
                sx={{
                  width:{xs:'100px' , sm:'150px' , md:'200px' , lg:'300px'},
                  height: "50px",
                  bgcolor: "#6A9FD1",

                  "&:focus": {
                    backgroundColor: "#FF5A00",
                  },
                }}
              >
                مهارت های نرم افزاری
              </Button>
            }
            {...a11yProps(3)}
          />
        </Tabs>
        <TabPanel value={value} index={0}>

        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
      </Box>
    </>
  );
}

export default Roadmap;
