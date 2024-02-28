import React, { useContext, useState } from "react";
import PLink from "./PLink";
import Setting from "../assets/images/svg/Setting";
import PBox from "./PBox";
import ThemeSwitch from "./ThemeSwitch";
import PStack from "./PStack";
import PButton from "./PButton";
import { ThemeContext } from "./ThemeProviderComponent";
import styled from "@emotion/styled";

const ThemeSectionWrapper = styled(PBox)(({ theme }) => ({
    "& .setting-btn": {
    position: "fixed",
    right: 4,
    top: 100,
    display: "block",
    padding: "10px",
    backgroundColor: theme.palette.primary.main,
    borderRadius: "50px 0 0 50px",
    "& svg": {
      verticalAlign: "middle",
      animation: "rotate 5s linear infinite",
    },
  },
  "@keyframes rotate": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },
  "& .setting-box": {
    position: "fixed",
    top: 155,
    right: -200,
    transition: "all 0.3s ease-in-out",
    zIndex: '2',
    backgroundColor: theme.palette.secondary.main,
    padding: "15px",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
    borderRadius: "5px 0 0 5px",
    width: 200,
    "&.active": {
      right: 4,
    },
  },
}))

const ThemeChangeSection = () => {
  const { toggleTheme } = useContext(ThemeContext);

  const [isActive, setIsActive] = useState(false);

  const settingToggle = () => {
    setIsActive(!isActive);
  };
  const colorPalette = [
    {
      color: "#74E291",
      bcolor: "#FF6868",
    },
    {
      color: "#FFD23F",
      bcolor: "#0099e5",
    },
    {
      color: "#FF6868",
      bcolor: "#FFD23F",
    },
    {
      color: "#0099e5",
      bcolor: "#74E291",
    },
  ];

  const handlePrimaryColor = (data) => {
    localStorage.setItem("primaryColor", JSON.stringify(data));
  };
  
  return (
    <ThemeSectionWrapper>
      <PLink className="setting-btn" onClick={settingToggle}>
        <Setting />
      </PLink>
      <PBox className={`${isActive ? "active" : ""} setting-box`}>
        <ThemeSwitch onChange={toggleTheme} />
        <PStack direction="row" gap={1.5} mt={2}>
          {colorPalette?.map((colorData, colorIndex) => {
            return (
              <PButton
                sx={{ padding: "0", minWidth: "unset" }}
                onClick={() => handlePrimaryColor(colorData.color)}
              >
                <PBox
                  sx={{
                    height: "30px",
                    width: "30px",
                    padding: '2px',
                    borderRadius: "50%",
                    outline: "2px solid",
                    backgroundColor: `${colorData.color}`,
                    outlineOffset: '2px',
                    outlineColor: 'transparent',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                      outlineColor: `${colorData.color}`,
                    },
                  }}
                ></PBox>
              </PButton>
            );
          })}
        </PStack>
      </PBox>
    </ThemeSectionWrapper>
  );
};

export default ThemeChangeSection;
