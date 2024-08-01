import styled from "@emotion/styled";
import React from "react";
import PGridContainer from "../../../Shared/PGridContainer";
import PGridItem from "../../../Shared/PGridItem";
import PStack from "../../../Shared/PStack";
import PBox from "../../../Shared/PBox";
import PTypography from "../../../Shared/PTypography";
import PButton from "../../../Shared/PButton";

const SinglePriceBoxMain = styled(PStack)(({ theme }) => ({
  backgroundColor: theme.palette.bg.main,
  border: `1px solid ${theme.palette.border.main300}`,
  padding: 30,
  alignItems: "center",
    gap: "25px 0",
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
        boxShadow: `0 0 20px ${theme.palette.boxShadow.main}`,
        transform: 'translateY(-8px)'
  },
  "& .MuiTypography-root": {
    textAlign: "center",
  },
  
}));

const SinglePriceBox = ({ priceBox }) => {
  return (
    <PBox marginTop="28px">
      <PGridContainer spacing={3.75}>
        {priceBox?.map((priceBox, priceBoxIndex) => {
          return (
            <PGridItem xs={12} md={4} key={priceBoxIndex}>
              <SinglePriceBoxMain>
                <PTypography fontSize="14px">{priceBox?.plan}</PTypography>
                <PStack>
                  <PTypography
                    variant="h2"
                    fontWeight="500"
                    color={(theme) => theme.palette.text.main50}
                  >{`$${priceBox?.price}`}</PTypography>
                  <PTypography fontSize="11px">per month</PTypography>
                </PStack>
                <PButton
                  variant="outlined"
                  color={priceBox?.btnColor || "primary"}
                >
                  free trial
                </PButton>
                <PStack alignItems="center" gap="15px">
                  {priceBox?.list?.map((listItem, listItemIndex) => {
                    return (
                      <PTypography
                        fontSize="14px"
                        color={(theme) => theme.palette.text.main50}
                        key={listItemIndex}
                      >
                        {listItem}
                      </PTypography>
                    );
                  })}
                </PStack>
              </SinglePriceBoxMain>
            </PGridItem>
          );
        })}
      </PGridContainer>
    </PBox>
  );
};

export default SinglePriceBox;
