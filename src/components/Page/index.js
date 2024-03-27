import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { forwardRef } from 'react';
import { Box, Stack, Typography } from '@mui/material';

// ----------------------------------------------------------------------

const Page = forwardRef(({ children, title = "", meta, ...other }, ref) => (
  <Box ref={ref} {...other}>
    <Helmet>
      <title>{title}</title>
      {meta}
    </Helmet>
    <Stack rowGap={1}>
      <Stack
        zIndex={1}
        borderRadius={2}
        mt={{ lg: "-92px", md: "-60px" }}
        p={5}
        paddingLeft={{ md: 12, lg: 8 }}
        bgcolor="#fff"
        rowGap={1}
      >
        <Typography
          display={{ xs: "none", md: "flex" }}
          color="black"
          variant="subtitle1"
          fontSize={20}
          letterSpacing={1}
        >
           صبا صدقی عزیز خوش اومدی ❤️
        </Typography>
        {children}
      </Stack>
    </Stack>
  </Box>
));


export default Page;
