import React from "react";
import PStack from "../../../Shared/PStack";
import styled from "@emotion/styled";
import PTypography from "../../../Shared/PTypography";
import PSubHead from "../../../Shared/PSubHead";

const KnowledgeMain = styled(PStack)(({ theme }) => ({
  flexDirection: "row",
  flexWrap: "wrap",
  gap: "8px",
  "& .MuiTypography-root": {
    padding: "5px 10px",
    backgroundColor: theme.palette.primary.main,
    borderRadius: 2,
    fontSize: 13,
    color: theme.palette.white.main,
    fontWeight: 500,
  },
}));

const Knowledge = () => {
  const knowledgeData = [
    {
      label: "Marketing",
    },
    {
      label: "Social Media",
    },
    {
      label: "Communication",
    },
    {
      label: "Social Networking",
    },
    {
      label: "Photoshop",
    },
    {
      label: "Figma",
    },
    {
      label: "Analytics",
    },
    {
      label: "eCommerce",
    },
    {
      label: "Web Design",
    },
    {
      label: "UI/UX Design",
    },
    {
      label: "WordPress",
    },
    {
      label: "HTML",
    },
    {
      label: "CSS",
    },
    {
      label: "JS",
    },
    {
      label: "PHP",
    },
    {
      label: "Usability",
    },
  ];

  return (
    <PStack spacing={3}>
      <PSubHead title="Knowlegdes" />
      <KnowledgeMain>
        {knowledgeData?.map((kData, kIndex) => {
          return <PTypography>{kData?.label}</PTypography>;
        })}
      </KnowledgeMain>
    </PStack>
  );
};

export default Knowledge;
