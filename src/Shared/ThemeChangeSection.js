import styled from "@emotion/styled";
import React, { useContext, useEffect, useState } from "react";
import Draggable from "react-draggable";
import DarkThemeProvider from "../Theme/DarkTheme";
import Setting from "../assets/images/svg/Setting";
import PBox from "./PBox";
import PButton from "./PButton";
import PStack from "./PStack";
import { ThemeContext } from "./ThemeProviderComponent";
import ThemeSwitch from "./ThemeSwitch";

const ThemeSectionWrapper = styled(PBox)(({ theme }) => ({
  cursor: "grab",
  "& .react-draggable": {
    position: "relative",
    zIndex: 2,
  },
  "& .setting-btn": {
    display: "block",
    padding: "10px",
    backgroundColor: theme.palette.primary.main,
    borderRadius: "50px 0 0 50px",
    zIndex: 1,
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
    position: "absolute",
    right: -204,
    transition: "all 0.1s ease-in-out",
    zIndex: "2",
    backgroundColor: theme.palette.secondary.main,
    padding: "15px",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
    borderRadius: "5px 0 0 5px",
    width: 200,
    "&.active": {
      right: 0,
    },
  },
}));

const ThemeChangeSection = ({ setColor }) => {
  const { toggleTheme } = useContext(ThemeContext);
  const [isActive, setIsActive] = useState(false);

  const settingToggle = () => {
    setIsActive(!isActive);
  };

  const colorPalette = [
    {
      color: "#0099e5",
    },
    {
      color: "#34c7a9",
    },
    {
      color: "#FFD23F",
    },
    {
      color: "#a878ff",
    },
    {
      color: "#ff99cc",
    },
    {
      color: "#E53153",
    },
    {
      color: "#FF9F54",
    },
  ];

  const handlePrimaryColor = (data) => {
    localStorage.setItem("primaryColor", JSON.stringify(data));
    setColor(data);
  };

  return (
    <ThemeSectionWrapper>
      <Draggable
        axis="y"
        bounds={{ top: 0, bottom: 620 }}
        defaultPosition={{ x: 0, y: 100 }}
      >
        <PBox>
          <PBox position="absolute" zIndex="1" right="4px" width="fit-content">
            <PBox className="setting-btn" onClick={settingToggle}>
              <Setting />
            </PBox>
            <PBox className={`${isActive ? "active" : ""} setting-box`}>
              <ThemeSwitch onChange={toggleTheme} />
              <PStack direction="row" gap={1.5} mt={2} flexWrap="wrap">
                {colorPalette?.map((colorData, colorIndex) => {
                  return (
                    <PButton
                      key={colorIndex}
                      sx={{ padding: "0", minWidth: "unset" }}
                      onClick={() => handlePrimaryColor(colorData.color)}
                    >
                      <PBox
                        sx={{
                          height: "30px",
                          width: "30px",
                          padding: "2px",
                          borderRadius: "50%",
                          outline: "2px solid",
                          backgroundColor: `${colorData.color}`,
                          outlineOffset: "2px",
                          outlineColor: "transparent",
                          transition: "all 0.2s ease-in-out",
                          "&:hover": {
                            outlineColor: `${colorData.color}`,
                          },
                        }}
                      ></PBox>
                    </PButton>
                  );
                })}
              </PStack>
            </PBox>
          </PBox>
        </PBox>
      </Draggable>
    </ThemeSectionWrapper>
  );
};

export default ThemeChangeSection;
