import React from "react";
import styled from "styled-components";
// Assets
import ClientLogo01 from "../../assets/img/pngegg.png";
import ClientLogo02 from "../../assets/img/firebase.png";
import ClientLogo03 from "../../assets/img/pngwing.com.png";
import ClientLogo04 from "../../assets/img/pngwing.com (1).png";
import ClientLogo05 from "../../assets/img/pngegg (1).png";
import ClientLogo06 from "../../assets/img/images.png";


export default function TechIconsGrid() {
  return (
<div className="div">
<HeaderInfo>
            <h1 className="font40 extraBold">Our Tech Stack</h1>
            <p className="font13">
            We leverage cutting-edge technologies to deliver exceptional solutions tailored to your needs. <br></br>Here's a glimpse of the tools and platforms we excel in.
            </p>
          </HeaderInfo>
<GridContainer>
      <IconWrapper>
        <TechIcon src={ClientLogo01} alt="Tech Logo" />
      </IconWrapper>
      <IconWrapper>
        <TechIcon src={ClientLogo06} alt="Tech Logo" />
      </IconWrapper>
      <IconWrapper>
        <TechIcon src={ClientLogo03} alt="Tech Logo" />
      </IconWrapper>
      <IconWrapper>
        <TechIcon src={ClientLogo04} alt="Tech Logo" />
      </IconWrapper>
      <IconWrapper>
        <TechIcon src={ClientLogo05} alt="Tech Logo" />
      </IconWrapper>
      <IconWrapper>
        <TechIcon src={ClientLogo02} alt="Tech Logo" />
      </IconWrapper>
    </GridContainer>
</div>
  );
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr); /* Default to 6 columns */
  gap: 20px; /* Spacing between items */
  padding: 20px;
  

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr); /* Medium screens: 4 columns */
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr); /* Small screens: 2 columns */
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TechIcon = styled.img`
  max-height: 100px; /* Maximum height for large screens */
  width: auto; /* Maintain aspect ratio */
  margin: 0 20px;

  @media (max-width: 600px) {
    max-height: 60px; /* Smaller height for small screens */
  }
`;

const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;