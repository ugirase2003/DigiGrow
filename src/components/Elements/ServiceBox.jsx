import React from "react";
import styled from "styled-components";
// Assets
import MachineIcon from "../../assets/img/sericon/machine-learning.png";
import AppDevIcon from "../../assets/img/sericon/coding.png";
import BrowserIcon from "../../assets/img/sericon/world-wide-web.png";
import DataAnaIcon from "../../assets/img/sericon/data-research.png";

export default function ServiceBox({ icon, title, subtitle }) {
  let getIcon;

  // Switch statement to assign the correct image source
  switch (icon) {
    case "appdev":
      getIcon = AppDevIcon;
      break;
    case "browser":
      getIcon = BrowserIcon;
      break;
    case "machine":
      getIcon = MachineIcon;
      break;
    case "dataanalyst":
      getIcon = DataAnaIcon;
      break;
    default:
      getIcon = AppDevIcon;
      break;
  }

  return (
    <Wrapper className="flex flexColumn">
      {/* Use img tag with the src attribute */}
      <IconStyle>
        <img src={getIcon} alt={icon} style={{ height: "50px", width: "auto" }} />
      </IconStyle>
      <TitleStyle className="font20 extraBold">{title}</TitleStyle>
      <SubtitleStyle className="font13">{subtitle}</SubtitleStyle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;

const IconStyle = styled.div`
  @media (max-width: 860px) {
    margin: 0 auto;
  }
`;

const TitleStyle = styled.h2`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 40px 0;
  @media (max-width: 860px) {
    padding: 20px 0;
  }
`;

const SubtitleStyle = styled.p`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;
