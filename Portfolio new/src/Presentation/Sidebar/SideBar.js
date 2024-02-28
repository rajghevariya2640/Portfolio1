import styled from "@emotion/styled";
import { Button, InputAdornment, Switch } from "@mui/material";
import React, { useContext, useState } from "react";
import PBox from "../../Shared/PBox";
import PList from "../../Shared/PList";
import PListItem from "../../Shared/PListItem";
import PStack from "../../Shared/PStack";
import PTextfield from "../../Shared/PTextfield";
import PTypography from "../../Shared/PTypography";
import PLink from "../../Shared/PLink";
import PersonalImg from "../../assets/images/png/About/personalImage.jpeg";
import Search from "../../assets/images/svg/Serch";
import Twitter from "../../assets/images/svg/Twitter";
import LinkedIn from "../../assets/images/svg/LinkedIn";
import Facebook from "../../assets/images/svg/Facebook";
import { ThemeContext } from "../../Shared/ThemeProviderComponent";
import { theme } from "../../Theme/Theme";
import Setting from "../../assets/images/svg/Setting";
import PButton from "../../Shared/PButton";
import ThemeSwitch from "../../Shared/ThemeSwitch";

const SideBarWrapper = styled(PStack)(({ theme }) => ({
  position: "fixed",
  top: "0",
  left: "0",
  bottom: "0",
  width: 160,
  backgroundColor: theme.palette.secondary.main,
  padding: "30px 0 15px",
  overflow: "auto",
  "& .MuiStack-root:has(img)": {
    margin: "0 20px 28px",
    "& .MuiBox-root": {
      margin: "0 auto",
    },
    "& .MuiTypography-h4": {
      textAlign: "center",
      color: theme.palette.text.main50,
    },
  },
  "& .MuiList-root": {
    "& .MuiListItem-root": {
      overflow: "hidden",
      padding: "0",
      "& a": {
        width: "100%",
        textTransform: "capitalize",
        textAlign: "center",
        fontSize: 14,
        color: theme.palette.text.main50,
        borderBottom: `1px solid ${theme.palette.border.main50}`,
        padding: "12px 5px",
        fontWeight: 500,
        "&:first-of-type": {
          borderTop: `1px solid ${theme.palette.border.main50}`,
        },
        "&::after": {
          content: "''",
          position: "absolute",
          right: "0",
          top: "-100%",
          width: 2,
          height: "100%",
          backgroundColor: theme.palette.primary.main,
        },
        "&:hover, &.active": {
          backgroundColor: theme.palette.secondary.main50,
          cursor: "pointer",
        },
        "&.active::after, &:hover::after": {
          top: "0",
          transition: "all 0.3s ease-in-out",
        },
      },
    },
  },
  "& .MuiStack-root:has(svg)": {
    "& .MuiBox-root": {
      height: 28,
      width: 28,
      backgroundColor: theme.palette.secondary.main100,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      transition: "all 0.2s ease-in-out",
      "& svg": {
        verticalAlign: "middle",
        fill: theme.palette.icon.main,
        transition: "all 0.2s ease-in-out",
        "& path": {
          fill: theme.palette.icon.main,
          transition: "all 0.2s ease-in-out",
        },
      },
      "&:hover": {
        backgroundColor: theme.palette.primary.main,
        "& svg": {
          verticalAlign: "middle",
          fill: theme.palette.white.main,
          "& path": {
            fill: theme.palette.white.main,
          },
        },
      },
    },
  },
  
}));

const SideBar = () => {

  const sidebarList = [
    {
      id: "aboutUs",
      to: "/",
      lable: "About me",
    },
    {
      id: "resume",
      to: "/resume",
      lable: "resume",
    },
    {
      id: "portfolio",
      to: "/portfolio",
      lable: "portfolio",
    },
    {
      id: "blog",
      to: "/blog",
      lable: "blog",
    },
    {
      id: "contact",
      to: "/contact",
      lable: "contact",
    },
    {
      id: "extra",
      to: "/extra",
      lable: "Extra",
    },
    {
      id: "getItNow",
      to: "/get-it-now",
      lable: "get it now",
    },
  ];

  const socialIcon = [
    {
      icon: <Twitter />,
    },
    {
      icon: <LinkedIn />,
    },
    {
      icon: <Facebook />,
    },
  ];
  
  return (
    <SideBarWrapper>
      <PStack gap={1.5}>
        <PBox maxWidth={{ xs: "60px" }}>
          <img src={PersonalImg} alt="Personal pic" />
        </PBox>
        <PTypography variant="h4" fontWeight={600}>
          Alex Smith
        </PTypography>
      </PStack>
      <PList sx={{ marginBottom: "22px" }}>
        {sidebarList?.map((sList, SlistIndex) => {
          return (
            <PListItem key={SlistIndex}>
              <PLink to={sList?.to} id={sList?.id}>
                {sList?.lable}
              </PLink>
            </PListItem>
          );
        })}
      </PList>
      <PStack sx={{ margin: "0 15px 40px" }}>
        <PTextfield
          placeholder="Search"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <Search width={20} />
              </InputAdornment>
            ),
          }}
        />
      </PStack>
      <PStack
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{ margin: "0 15px", gap: 1 }}
      >
        {socialIcon?.map((sIcon, iconIndex) => {
          return (
            <PLink key={iconIndex}>
              <PBox>{sIcon?.icon}</PBox>
            </PLink>
          );
        })}
      </PStack>
      <PTypography
        sx={{
          color: theme.palette.secondary.main300,
          textAlign: "center",
          fontSize: 12,
          margin: "0 15px",
          marginTop: "auto",paddingTop: '30px',
          lineHeight: "1.15",
        }}
      >
        &copy; 2024 All rights reserved.
      </PTypography>
    </SideBarWrapper>
  );
};

export default SideBar;
