import styled from "@emotion/styled";
import React from "react";
import { Autoplay, EffectFade } from "swiper/modules";
import PStack from "../../../Shared/PStack";
import PSwiper from "../../../Shared/PSwiper";
import PTypography from "../../../Shared/PTypography";
import PButton from "../../../Shared/PButton";
import PBox from "../../../Shared/PBox";
import PersonalImg from "../../../assets/images/png/About/personalImage.jpeg";
import { theme } from "../../../Theme/Theme";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import DownloadCV from "../../../Shared/DownloadCV";

const AboutMainWrapper = styled(PStack)(({ theme }) => ({
  marginLeft: "-70px",
  marginRight: "-70px",
  marginTop: "-70px",
  [theme.breakpoints.down("md")]: {
    margin: 0,
    flexDirection: "column",
  },
  "& .MuiBox-root": {
    background: `url('${PersonalImg}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "50%",
    filter: "brightness(1.1)",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: 425,
    },
  },
  "& .MuiStack-root:has( > .MuiStack-root)": {
    width: "50%",
    padding: "80px 7.25%",
    backgroundColor: theme.palette.secondary.main50,
    gap: "30px 0",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      padding: " 30px 0",
      backgroundColor: "transparent",
    },
    "& .swiper": {
      maxWidth: 300,
      margin: 0,
      "& .MuiTypography-body2": {
        backgroundColor: theme.palette.secondary.main50,
      },
    },
    "& .MuiTypography-body2": {
      fontWeight: 500,
      lineHeight: "1.75",
    },
    "& .MuiTypography-h1": {
      color: theme.palette.text.main50,
    },
  },
}));

const AboutMain = () => {
  const occupation = [
    {
      lable: "web designer",
    },
    {
      lable: "Frontend developer",
    },
  ];

  const button = [
    {
      lable: "Download CV",
      btnColor: "primary",
    },
    {
      lable: "Contact",
      btnColor: "white",
    },
  ];

  return (
    <AboutMainWrapper direction="row">
      <PBox />
      <PStack>
        <PStack gap={0.5}>
          <PSwiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            effect={"fade"}
            loop
            modules={[Autoplay, EffectFade]}
          >
            {occupation.map((data, index) => {
              return (
                <SwiperSlide key={index}>
                  <PTypography
                    variant="body2"
                  >
                    {data?.lable}
                  </PTypography>
                </SwiperSlide>
              );
            })}
          </PSwiper>
          <PTypography variant="h1" textTransform="capitalize">
            Raj ghevariya
          </PTypography>
        </PStack>
        <PStack gap={1.5}>
          <PTypography variant="body2">
           I'm a passionate Web Designer and Front-End Developer with 2.5 years of hands-on experience in crafting engaging, user-friendly websites and interfaces. During my time at Tagline Infotech LLP, I’ve collaborated with cross-functional teams to deliver responsive, pixel-perfect designs that meet both client and user needs.
          </PTypography>
          <PTypography variant="body2">
            I specialize in turning ideas into interactive, functional web experiences using modern HTML, CSS, JavaScript, and React. I enjoy solving UI challenges, improving performance, and creating intuitive user journeys. My focus is on clean code, accessibility, and delivering work that balances design and functionality.
          </PTypography>
        </PStack>
        <PStack direction="row" gap={1}>
          <DownloadCV />
              <PButton
                variant="outlined"
                color="white"
              >
                Contact
              </PButton>
          {/* {button?.map((btnData, btnIndex) => {
            return (
              <PButton
                key={btnIndex}
                variant="outlined"
                color={btnData?.btnColor}
              >
                {btnData?.lable}
              </PButton>
            );
          })} */}
        </PStack>
      </PStack>
    </AboutMainWrapper>
  );
};

export default AboutMain;
