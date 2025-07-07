import styled from "@emotion/styled";
import Isotope from "isotope-layout";
import React, { useEffect, useRef } from "react";
import PBox from "../../Shared/PBox";
import PGridContainer from "../../Shared/PGridContainer";
import PGridItem from "../../Shared/PGridItem";
import PLink from "../../Shared/PLink";
import PStack from "../../Shared/PStack";
import PTypography from "../../Shared/PTypography";
import Img1 from "../../assets/images/png/Portfolio/agency.png";
import Img2 from "../../assets/images/png/Portfolio/ai.png";
import Img3 from "../../assets/images/png/Portfolio/educational.png";
import Img4 from "../../assets/images/png/Portfolio/portfolio.png";
import Img5 from "../../assets/images/png/Portfolio/crm.png";
import Img6 from "../../assets/images/png/Portfolio/e-commerce.png";
import File from "../../assets/images/svg/File";
import Image from "../../assets/images/svg/Image";
import Shooting from "../../assets/images/svg/Shooting";
import Sound from "../../assets/images/svg/Sound";
import TailwindIcon from "../../assets/images/svg/TailwindIcon";

const GalleryMain = styled(PBox)(({ theme }) => ({
  "& .btn": {
    color: theme.palette.text.mainAAA,
    border: `2px solid ${theme.palette.border.main50}`,
    display: "block",
    padding: "5px 10px",
    fontSize: "12px",
    textTransform: "capitalize",
    transition: "all 0.3s ease-in-out",
    "&.active": {
      // borderColor: theme.palette.primary.main
    },
    "&:hover": {
      borderColor: theme.palette.icon.main100,
    },
  },
  "& .image-wrapper": {
    display: "block",
    maxHeight: 345,
    position: "relative",
    overflow: "hidden",
    "& img": {
      transition: "all 15s ease-in-out",
    },
    "&:hover": {
      "& img": {
        transform: "translateY(calc(-100% + 345px))",
      },
      "& .MuiTypography-h6, & .MuiTypography-body2, & .MuiBox-root:has( > svg)":
        {
          opacity: 1,
          visibility: "visible",
        },
    },
    "& .MuiTypography-h6": {
      position: "absolute",
      top: 10,
      left: 10,
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.text.main50,
      padding: "5px",
      textTransform: "capitalize",
      opacity: 0,
      visibillity: "hidden",
      transition: "all 0.3s ease-in-out",
    },
    "& .MuiTypography-body2": {
      position: "absolute",
      bottom: 10,
      left: 10,
      fontSize: 11,
      padding: "0 5px",
      borderRadius: 2,
      fontWeight: 500,
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.text.main50,
      textTransform: "capitalize",
      opacity: 0,
      visibillity: "hidden",
      transition: "all 0.3s ease-in-out",
    },
    "& .MuiBox-root:has( > svg)": {
      position: "absolute",
      top: 10,
      right: 10,
      height: 28,
      width: 28,
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.primary.main,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      opacity: "0",
      visibility: "hidden",
      transition: "all 0.3s ease-in-out",
    },
  },
}));

const Gallery = () => {
  const isotopeContainer = useRef(null);
  let iso;

  useEffect(() => {
    iso = new Isotope(isotopeContainer.current, {
      itemSelector: ".isotope-item",
      layoutMode: "fitRows",
    });

    return () => {
      if (iso) {
        iso.destroy();
      }
    };
  }, []);

  const filterItems = (filterValue) => {
    if (iso) {
      iso.arrange({ filter: filterValue });
    }
  };

  const buttons = [
    {
      sortClass: "*",
      lable: "all",
    },
    {
      sortClass: ".tailwind",
      lable: "tailwind",
    },
    {
      sortClass: ".mui",
      lable: "Material UI",
    },
    {
      sortClass: ".bootstrap",
      lable: "Bootstrap",
    },
  ];

  const galleryData = [
    {
      image: Img1,
      sortClass: "tailwind",
      sortName: "Agency Landing Page",
      smallLabel: "Tailwind CSS",
      icon: <TailwindIcon />,
      link: "https://port-newin.netlify.app/",
    },
    {
      image: Img2,
      sortClass: "bootstrap",
      sortName: "AI Landing Page",
      smallLabel: "Bootstrap",
      icon: <File />,
      link: "https://smartconvo.io/",
    },
    {
      image: Img3,
      sortClass: "tailwind",
      sortName: "Education Landing Page",
      smallLabel: "Tailwind CSS",
      icon: <TailwindIcon />,
      link: "https://learnwithskillgrow.netlify.app/",
    },
    {
      image: Img4,
      sortClass: "bootstrap",
      sortName: "Portfolio Landing Page",
      smallLabel: "Bootstrap",
      icon: <Shooting />,
      link: "https://mone-nuxt.netlify.app/",
    },
    {
      image: Img5,
      sortClass: "mui",
      sortName: "CRM Landing Page",
      smallLabel: "Material UI",
      icon: <File />,
      link: "https://angular.hibootstrap.com/daxa/",
    },
    {
      image: Img6,
      sortClass: "bootstrap",
      sortName: "E-commerce Landing Page",
      smallLabel: "Bootstrap",
      icon: <Image />,
      link: "https://chawkbazar.vercel.app/",
    },
  ];

  return (
    <GalleryMain>
      <PStack direction="row" gap={0.5} justifyContent="end">
        {buttons?.map((btn, btnsIndex) => {
          return (
            <PLink
              onClick={() => filterItems(`${btn?.sortClass}`)}
              key={btnsIndex}
              className="btn"
            >
              {btn?.lable}
            </PLink>
          );
        })}
      </PStack>
      <div
        className="isotope-container"
        ref={isotopeContainer}
        style={{ marginTop: "35px" }}
      >
        <PGridContainer spacing="14px">
          {galleryData?.map((gallery, galleryIndex) => {
            return (
              <PGridItem
                key={galleryIndex}
                xs={12}
                md={4}
                className={`isotope-item ${gallery?.sortClass}`}
              >
                <PBox className="image-wrapper">
                  <PLink  to={gallery?.link}>
                    <img src={gallery?.image} alt="" />
                    <PTypography variant="h6">{gallery?.sortName}</PTypography>
                    <PTypography variant="body2">
                      {gallery?.smallLabel}
                    </PTypography>
                    <PBox>{gallery?.icon}</PBox>
                  </PLink>
                </PBox>
              </PGridItem>
            );
          })}
        </PGridContainer>
      </div>
    </GalleryMain>
  );
};

export default Gallery;
