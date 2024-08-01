import React from "react";
import PBox from "../../../Shared/PBox";
import PGridContainer from "../../../Shared/PGridContainer";
import PGridItem from "../../../Shared/PGridItem";
import PStack from "../../../Shared/PStack";
import PTypography from "../../../Shared/PTypography";
import styled from "@emotion/styled";

const ServiceBoxMain = styled(PBox)(({ theme }) => ({
  '& .MuiGrid-item': {
    '&:nth-child(2)': {
      "& .MuiStack-root:has( > svg)": {
        backgroundColor: '#e65959',
        '& svg': {
          '& path': {
            fill: 'none',
          },
        },
      },
    },
    '&:nth-child(3)': {
      "& .MuiStack-root:has( > svg)": {
        backgroundColor: '#34c7a9',
      },
    },
    '&:nth-child(4)': {
      "& .MuiStack-root:has( > svg)": {
        backgroundColor: '#a878ff',
      },
    },
  },
}))
const SingleService = styled(PStack)(({ theme }) => ({
  gap: "15px",
  alignItems: "center",
  "& .MuiStack-root:has( > svg)": {
    height: 80,
    width: 80,
    backgroundColor: '#0099e5',
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center",
    "& svg": {
      color: theme.palette.white.main,
      "& path": {
        fill: theme.palette.white.main,
        stroke: theme.palette.white.main,
      },
    },
  },
  "& .MuiTypography-body1": {
    fontSize: 14,
    fontWeight: 500,
  },
  "& .MuiTypography-h6": {
    color: theme.palette.text.main50,
  },
}));

const SingleExtraService = ({ ExtraService }) => {
  return (
    <ServiceBoxMain marginTop="25px">
      <PGridContainer spacing={3.75}>
        {ExtraService?.map((exService, exServiceIndex) => {
          return (
            <PGridItem key={exServiceIndex} xs={12} sm={12} md={3}>
              <SingleService>
                <PStack>{exService.icon}</PStack>
                <PTypography variant="h6" fontWeight="600">
                  {exService.label}
                </PTypography>
                <PTypography textAlign="center">
                  {exService.description}
                </PTypography>
              </SingleService>
            </PGridItem>
          );
        })}
      </PGridContainer>
    </ServiceBoxMain>
  );
};

export default SingleExtraService;
