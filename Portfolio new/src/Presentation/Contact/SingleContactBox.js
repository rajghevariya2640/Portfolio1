import React from "react";
import PGridContainer from "../../Shared/PGridContainer";
import PGridItem from "../../Shared/PGridItem";
import PStack from "../../Shared/PStack";
import PBox from "../../Shared/PBox";
import PTypography from "../../Shared/PTypography";
import styled from "@emotion/styled";

const SingleBoxMain = styled(PGridItem)(({ theme }) => ({
  "& .single-contact-box": {
    backgroundColor: theme.palette.bg.main,
    border: `1px solid ${theme.palette.border.main300}`,
    alignItems: "center",
    padding: "20px 20px 30px 20px",
    gap: "8px 0",
    transition: "all 0.2s ease-in-out",
    "& .MuiTypography-body1": {
      color: theme.palette.text.main50,
    },
    "& .MuiTypography-h3": {
      color: theme.palette.text.mainAAA,
    },
    "&:hover": {
      transform: "translateY(-8px)",
      boxShadow: "0px 0px 20px rgba(0,0,0,0.1)",
    },
  },
}));

const SingleContactBox = ({ contactBox }) => {
  return (
    <PBox mt="26px">
      <PGridContainer spacing={3.75}>
        {contactBox?.map((contact, contactIndex) => {
          return (
            <SingleBoxMain key={contactIndex} xs={12} md={3}>
              <PStack className="single-contact-box">
                <PBox>{contact?.icon}</PBox>
                <PTypography fontWeight={600}>
                  {contact?.description}
                </PTypography>
                {contact.value && (
                  <PTypography fontSize="36px" variant="h3" fontWeight={500}>
                    {contact?.value}
                  </PTypography>
                )}
              </PStack>
            </SingleBoxMain>
          );
        })}
      </PGridContainer>
    </PBox>
  );
};

export default SingleContactBox;
