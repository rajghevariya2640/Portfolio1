import styled from "@emotion/styled";
import React from "react";
import PStack from "../../../Shared/PStack";
import PBox from "../../../Shared/PBox";
import PGridItem from "../../../Shared/PGridItem";
import PTypography from "../../../Shared/PTypography";

const SingleWorkWrapper = styled(PGridItem)(({ theme }) => ({}));

const SingleWork = ({ singleWork }) => {
  return (
    <>
      {singleWork?.map((sWork, sWorkIndex) => {
        return (
          <SingleWorkWrapper xs={12} md={6} key={sWorkIndex}>
            <PStack direction="row" gap={3}>
                    <PBox>{sWork?.icon}</PBox>
                    <PStack gap={1}>
                        <PTypography variant="h6" sx={{color: (theme) => theme.palette.text.main50}}>{sWork?.lable}</PTypography>
                        <PTypography sx={{fontSize: 14}}>{ sWork?.description}</PTypography>
                    </PStack>
            </PStack>
          </SingleWorkWrapper>
        );
      })}
    </>
  );
};

export default SingleWork;
