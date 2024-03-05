import styled from "@emotion/styled";
import React from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import PStack from "../../../Shared/PStack";
import PSwiper from "../../../Shared/PSwiper";
import PTypography from "../../../Shared/PTypography";
import PButton from "../../../Shared/PButton";
import PBox from "../../../Shared/PBox";
import PersonalImg from "../../../assets/images/png/About/personalImage.jpeg";
import { theme } from "../../../Theme/Theme";
import { SwiperSlide } from "swiper/react";

const AboutMainWrapper = styled(PStack)(({ theme }) => ({
  marginLeft: "-70px",
  marginRight: "-70px",
  marginTop: "-70px",
  "& .MuiBox-root": {
    background: `url('${PersonalImg}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "50%",
    filter: 'brightness(1.1)'
  },
  "& .MuiStack-root:has( > .MuiStack-root)": {
    width: "50%",
    padding: "80px 7.25%",
    backgroundColor: theme.palette.secondary.main50,
    gap: "30px 0",
    "& .swiper": {
      maxWidth: 300,
      margin: 0,
    },
    "& .MuiTypography-body2": {
      fontWeight: 500,
      lineHeight: '1.75',
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
            modules={[Autoplay, EffectFade]}
          >
            {occupation.map((data, index) => {
              return (
                <SwiperSlide key={index}>
                  <PTypography
                    sx={{
                      color: theme.palette.secondary.main300,
                      backgroundColor: (theme) => theme.palette.secondary.main50,
                      display: "inline",
                    }}
                    variant="body2"
                  >
                    {data?.lable}
                  </PTypography>
                </SwiperSlide>
              );
            })}
          </PSwiper>
          <PTypography variant="h1" textTransform="capitalize">Raj ghevariya</PTypography>
        </PStack>
        <PStack gap={1.5}>
          <PTypography variant="body2">
            Praesent sed aliquam arcu, non accumsan neque. In odio ante,
            vulputate ac magna vel, pharetra lobortis quam. Duis enim tortor,
            egestas et felis id, lobortis malesuada magna. Nunc sit amet
            sagittis nisi, eu semper nisl. Cras ut dictum nisl. Donec tincidunt
            eget orci.
          </PTypography>
          <PTypography variant="body2">
            Aliquam mollis, leo nec commodo facilisis, turpis lorem dapibus
            erat, sed consectetur nunc nulla ac elit. Suspendisse dictum id dui
            mollis auctor. Etiam id sapien neque. Cras nec rhoncus sem. Mauris
            metus ligula, varius vel iaculis at, pulvinar tincidunt magna.
          </PTypography>
        </PStack>
        <PStack direction="row" gap={1}>
          {button?.map((btnData, btnIndex) => {
            return (
              <PButton
                key={btnIndex}
                variant="outlined"
                color={btnData?.btnColor}
              >
                {btnData?.lable}
              </PButton>
            );
          })}
        </PStack>
      </PStack>
    </AboutMainWrapper>
  );
};

export default AboutMain;
