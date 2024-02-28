import styled from "@emotion/styled";
import React from "react";
import PStack from "./PStack";
import PTypography from "./PTypography";

const PageHeadWrapper = styled(PStack)(({ theme }) => ({
  marginBottom: 60,
  "& .MuiTypography-h3": {
    color: theme.palette.text.main50,
    fontWeight: 700,
    paddingBottom: 8,
    borderBottom: `2px solid ${theme.palette.secondary.main600}`,
  },
  "& .MuiTypography-body1": {
    marginLeft: "auto",
    marginTop: 8,
  },
}));

const PPageHead = ({ pageHead, subHead, notHome }) => {
  return (
    <>
      {notHome ?? (
        <PageHeadWrapper>
          <PTypography variant="h3">{pageHead}</PTypography>
          <PTypography>{subHead}</PTypography>
        </PageHeadWrapper>
      )}
    </>
  );
};

export default PPageHead;
