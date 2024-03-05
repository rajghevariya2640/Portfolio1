import React from "react";
import PGridContainer from "../../Shared/PGridContainer";
import PGridItem from "../../Shared/PGridItem";
import PStack from "../../Shared/PStack";
import PBox from "../../Shared/PBox";
import PTypography from "../../Shared/PTypography";
import PLink from "../../Shared/PLink";
import styled from "@emotion/styled";
import BlogSvg from "../../assets/images/svg/BlogSvg";

const SingleBlogWrapper = styled(PGridItem)(({ theme }) => ({
  '& .single-blog-main': {
    "& .MuiBox-root:has( > img )": {
      maxHeight: 365,
      overflow: "hidden",
      position: "relative",
      "& img": {
        height: "100%",
        transition: "all 0.3s ease-in-out",
      },
      "& .MuiTypography-root": {
        position: "absolute",
        top: 10,
        left: 10,
        backgroundColor: theme.palette.secondary.main,
        fontSize: 11.5,
        padding: "1px 5px",
        color: theme.palette.text.main50,
        fontWeight: 500,
        textTransform: "capitalize",
        zIndex: 1,
      },
      '&::after': {
        content: "''",
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.1)',
        opacity: 0,
        visibility: 'hidden',
        transition: "all 0.3s ease-in-out",
      },
      "& svg": {
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        fill: theme.palette.white.main,
        opacity: 0,
        visibility: 'hidden',
        zIndex: 1,
        transition: "all 0.3s ease-in-out",
      },
      "&:hover": {
          "& img": {
            transform: "scale(1.1)",
          },
          "& svg, &::after": {
             opacity: 1,
          visibility: 'visible',
          },
      },
    },
    "& .MuiStack-root:has( > .MuiTypography-root)": {
      padding: "20px 20px 30px 20px",
      backgroundColor: theme.palette.bg.main,
      border: `1px solid ${theme.palette.border.main50}`,
      gap: "10px",
      "& .MuiTypography-body1": {
        fontSize: 11,
        color: theme.palette.text.main,
      },
      "& .MuiTypography-h6": {
        color: theme.palette.text.main50,
      },
    },
  },
}));

const SingleBlog = ({ blogDetail }) => {
  return (
    <PGridContainer spacing={3.75}>
      {blogDetail.map((blog, blogIndex) => {
        return (
          <>
            <SingleBlogWrapper xs={12} md={6}>
              <PLink className="single-blog-main">
                <PBox>
                  <img src={blog.image} alt={`blog ${blogIndex}`} />
                  <PTypography>{blog.label}</PTypography>
                  <BlogSvg />
                </PBox>
                <PStack gap={1}>
                  <PTypography>{blog.date}</PTypography>
                  <PTypography variant="h6">{blog.description}</PTypography>
                </PStack>
              </PLink>
            </SingleBlogWrapper>
          </>
        );
      })}
    </PGridContainer>
  );
};

export default SingleBlog;
