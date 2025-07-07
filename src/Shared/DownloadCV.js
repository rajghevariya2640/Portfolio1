import React from "react";
import Button from "@mui/material/Button";
import PButton from "./PButton";

const DownloadCV = () => {
  return (
    <PButton
      variant="outlined"
      href="/resume.pdf" // Make sure this file exists in /public
      download
      color="primary"
    >
      Download CV
    </PButton>
  );
};

export default DownloadCV;
