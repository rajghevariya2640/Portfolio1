import React, { useRef, useEffect } from "react";
import PButton from "../../Shared/PButton";
import Isotope from "isotope-layout";
import PStack from "../../Shared/PStack";
import PBox from "../../Shared/PBox";
import PLink from "../../Shared/PLink";
import PGridContainer from "../../Shared/PGridContainer";
import PGridItem from "../../Shared/PGridItem";
import styled from "@emotion/styled";
import Img1 from "../../assets/images/png/Portfolio/Item1.png";
import Img2 from "../../assets/images/png/Portfolio/Item2.png";
import Img3 from "../../assets/images/png/Portfolio/Item3.png";
import Img4 from "../../assets/images/png/Portfolio/Item4.png";
import Img5 from "../../assets/images/png/Portfolio/Item5.png";
import Img6 from "../../assets/images/png/Portfolio/Item6.png";

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
    '& img': {
      transition: 'all 0.3s ease-in-out'
    },
    '&:hover': {
      '& img': {
        transform: 'scale(1.1)'
      },
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
    },
    {
      image: Img2,
      sortClass: "media",
    },
    {
      image: Img3,
      sortClass: "vimeo-video",
    },
    {
      image: Img4,
      sortClass: "youtube-video",
    },
    {
      image: Img5,
      sortClass: "media",
    },
    {
      image: Img6,
      sortClass: "mockups",
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
                className={`isotope-item ${gallery.sortClass}`}
              >
                <PLink className="image-wrapper">
                  <img src={gallery.image} alt="" />
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
