import styled from "@emotion/styled";
import React from "react";
// import "swiper/css";
import { Navigation } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import PBox from "../../../Shared/PBox";
import PNavigation from "../../../Shared/PNavigation";
import PStack from "../../../Shared/PStack";
import PSubHead from "../../../Shared/PSubHead";
import PSwiper from "../../../Shared/PSwiper";
import PTypography from "../../../Shared/PTypography";
import Image2 from "../../../assets/images/png/About/Testimonial1.png";
import Image1 from "../../../assets/images/png/About/Testimonial2.png";
import Image3 from "../../../assets/images/png/About/Testimonial3.png";

const TestimonialWrapper = styled(PBox)(({ theme }) => ({
  marginTop: 64,
  "& .swiper": {
    marginTop: 25,
  },
  "& .MuiStack-root:has( > .MuiBox-root > img)": {
    position: "relative",
  },
  "& .MuiBox-root:has(img)": {
    maxWidth: 80,
    borderRadius: "50%",
    overflow: "hidden",
    marginTop: -60,
  },
  "& .MuiBox-root:has( > .MuiTypography-root)": {
    border: `1px solid ${theme.palette.border.main300}`,
    backgroundColor: theme.palette.secondary.main400,
    padding: "20px 25px",
    borderRadius: 4,
  },
}));

const Testimonial = () => {
  const testimonialData = [
    {
      image: Image1,
      review:
        "Nam tempor commodo mi id sodales. Aenean sit amet nibh nec sapien consequat porta a sit amet diam.",
      name: "Gary Johnson",
      occupation: "Locost Accessories",
    },
    {
      image: Image2,
      review:
        "Donec eu est vel metus consequat volutpat. Nunc aliquet euismod mauris, a feugiat urna ullamcorper non.",
      name: "Daniel Pringle",
      occupation: "Rolling Thunder",
    },
    {
      image: Image3,
      review:
        "Etiam pretium ipsum quis justo dictum accumsan. Phasellus egestas odio a velit scelerisque, imperdiet elementum lorem aliquet.",
      name: "Billy Adams",
      occupation: "Sagebrush",
    },
  ];

  return (
    <TestimonialWrapper>
      <PSubHead title="Testimonials" />
      <PSwiper
        slidesPerView={2}
        spaceBetween={10}
        navigation={{
          nextEl: ".testimonialNext",
          prevEl: ".testimonialPrev",
        }}
        modules={[Navigation]}
      >
        <PNavigation
          prevClass="testimonialPrev"
          nextClass="testimonialNext"
          color={(theme) => theme.palette.secondary.main200}
        />
        {testimonialData?.map((testimonial, testimonialIndex) => {
          return (
            <SwiperSlide key={testimonialIndex}>
              <PStack>
                <PStack sx={{marginLeft: '60px'}}>
                  <PBox>
                    <PTypography
                      sx={{
                        color: (theme) => theme.palette.text.main,
                        fontWeight: 600,
                        fontStyle: "italic",
                        fontSize: 14,
                      }}
                    >
                      {testimonial?.review}
                    </PTypography>
                  </PBox>
                  <PStack sx={{marginLeft: '30px', marginTop: '10px'}}>
                    <PTypography sx={{fontWeight: 600, fontSize: 14, color: (theme) => theme.palette.text.main100}}>{testimonial?.name}</PTypography>
                    <PTypography sx={{fontSize: 11, color: (theme) => theme.palette.primary.main}}>{testimonial?.occupation}</PTypography>
                  </PStack>
                </PStack>
                <PBox>
                  <img
                    src={testimonial?.image}
                    alt={`testimonial ${testimonialIndex + 1}`}
                  />
                </PBox>
              </PStack>
            </SwiperSlide>
          );
        })}
      </PSwiper>
    </TestimonialWrapper>
  );
};

export default Testimonial;
