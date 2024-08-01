import styled from "@emotion/styled";
import Isotope from "isotope-layout";
import React, { useEffect, useRef } from "react";
import PBox from "../../Shared/PBox";
import PGridContainer from "../../Shared/PGridContainer";
import PGridItem from "../../Shared/PGridItem";
import PLink from "../../Shared/PLink";
import PStack from "../../Shared/PStack";
import PTypography from "../../Shared/PTypography";
import Img1 from "../../assets/images/png/Portfolio/Item1.png";
import Img2 from "../../assets/images/png/Portfolio/Item2.png";
import Img3 from "../../assets/images/png/Portfolio/Item3.png";
import Img4 from "../../assets/images/png/Portfolio/Item4.png";
import Img5 from "../../assets/images/png/Portfolio/Item5.png";
import Img6 from "../../assets/images/png/Portfolio/Item6.png";
import File from "../../assets/images/svg/File";
import Image from "../../assets/images/svg/Image";
import Shooting from "../../assets/images/svg/Shooting";
import Sound from "../../assets/images/svg/Sound";

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
    overflow: "hidden",
    position: 'relative',
    '& img': {
      transition: 'all 0.3s ease-in-out'
    },
    '&:hover': {
      '& img': {
        transform: 'scale(1.1)'
      },
      '& .MuiTypography-h6, & .MuiTypography-body2, & .MuiBox-root:has( > svg)': {
        opacity: 1,
        visibility: 'visible'
      },
    },
    '& .MuiTypography-h6': {
      position: 'absolute',
      top: 10,
      left: 10,
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.text.main50,
      padding: '5px',
      textTransform: 'capitalize',
      opacity: 0,
      visibillity: 'hidden',
      transition: 'all 0.3s ease-in-out'
    },
    '& .MuiTypography-body2': {
      position: 'absolute',
      bottom: 10,
      left: 10,
      fontSize: 11,
      padding: '0 5px',
      borderRadius: 2,
      fontWeight: 500,
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.text.main50,
      textTransform: 'capitalize',
      opacity: 0,
      visibillity: 'hidden',
      transition: 'all 0.3s ease-in-out'
    },
    '& .MuiBox-root:has( > svg)': {
      position: 'absolute',
      top: 10,
      right: 10,
      height: 28,
      width: 28,
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.primary.main,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      opacity: '0',
      visibility: 'hidden',
      transition: 'all 0.3s ease-in-out'
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
      sortClass: ".media",
      lable: "media",
    },
    {
      sortClass: ".mockups",
      lable: "mockups",
    },
    {
      sortClass: ".soundCloud",
      lable: "soundCloud",
    },
    {
      sortClass: ".vimeo-video",
      lable: "Vimeo video",
    },
    {
      sortClass: ".youtube-video",
      lable: "youtube video",
    },
  ];

  const galleryData = [
    {
      image: Img1,
      sortClass: "soundCloud",
      sortName: "sound Cloud",
      smallLabel: 'soundCloud',
      icon: <Sound />,
      link: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/221650664&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
    },
    {
      image: Img2,
      sortClass: "media",
      sortName: "media project 1",
      smallLabel: 'media',
      icon: <File/>,
    },
    {
      image: Img3,
      sortClass: "vimeo-video",
      sortName: "vimeo video 1",
      smallLabel: 'Vimeo videos',
      icon: <Shooting />,
      link: 'https://player.vimeo.com/video/158284739',
    },
    {
      image: Img4,
      sortClass: "youtube-video",
      sortName: "youtube video 1",
      smallLabel: 'youtube videos',
      icon: <Shooting />,
      link: 'https://www.youtube.com/embed/bg0gv2YpIok',
    },
    {
      image: Img5,
      sortClass: "media",
      sortName: "media project 1",
      smallLabel: 'media',
      icon: <File/>
    },
    {
      image: Img6,
      sortClass: "mockups",
      sortName: "mockup design 1",
      smallLabel: 'mockups',
      icon: <Image />
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
      <div className="isotope-container" ref={isotopeContainer} style={{marginTop: '35px'}}>
        <PGridContainer spacing="14px">
          {galleryData?.map((gallery, galleryIndex) => {
            return (
              <PGridItem
                key={galleryIndex}
                xs={12}
                md={4}
                className={`isotope-item ${gallery?.sortClass}`}
              >
                <PLink className="image-wrapper" to={gallery?.link}>
                  <img src={gallery?.image} alt="" />
                  <PTypography variant="h6">{gallery?.sortName}</PTypography>
                  <PTypography variant="body2">{gallery?.smallLabel}</PTypography>
                  <PBox>
                    {gallery?.icon}
                  </PBox>
                </PLink>
              </PGridItem>
            );
          })}
        </PGridContainer>
      </div>
    </GalleryMain>
  );
};

export default Gallery;
