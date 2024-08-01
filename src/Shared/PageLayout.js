import { CssBaseline } from "@mui/material";
import React from "react";
import PBox from "./PBox";
import PPageHead from "./PPageHead";
import styled from "@emotion/styled";

const PageLayoutMain = styled(PBox)(({ theme }) => ({
  marginLeft: "175px",
  padding: "50px 70px",
  backgroundColor: theme.palette.secondary.main,
  overflowX: "auto",
  [theme.breakpoints.down("md")]: {
    marginLeft: "0",
    padding: "30px 15px",
    marginTop: "50px",
  },
  [theme.breakpoints.up("md")]: {
    height: "100vh",
    "&::-webkit-scrollbar": { width: 4, position: "absolute", left: 0 },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: theme.palette.secondary.main300,
      padding: 0,
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: theme.palette?.white?.main,
      padding: 0,
    },
  },
}));

const PageLayout = ({ children, pageHeading, subHeading, notHome }) => {
  return (
    <CssBaseline>
      <PageLayoutMain>
        <PPageHead
          pageHead={pageHeading}
          subHead={subHeading}
          notHome={notHome}
        />
        {children}
      </PageLayoutMain>
    </CssBaseline>
  );
};

export default PageLayout;
