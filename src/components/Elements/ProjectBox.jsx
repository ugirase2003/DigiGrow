import React from 'react';
import Slider from 'react-slick'; // Import react-slick
import styled from 'styled-components';

export default function ProjectBox({ images, title, text, action }) {
  const settings = {
    autoplay: true,  // Enable auto-sliding
    autoplaySpeed: 3000, // Time between slides (3 seconds)
   
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one image at a time
    slidesToScroll: 1, // Scroll one image at a time
  };

  return (
    <Wrapper >
      <Slider {...settings}>
        {/* Render the images as a slideshow */}
        {images.map((img, index) => (
          <ImgBtn key={index} className="animate pointer" >
            <img className="radius8" src={img} alt={`project-${index}`} />
          </ImgBtn>
        ))}
      </Slider>
      
      <h3 className="font20 extraBold  ">{title}</h3>
      <p className="font13">{text}</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  height:100%;
  

  h3 {
    padding-bottom: 10px;
  }
  p {
    font-size: 13px;
  }
`;
const ImgBtn = styled.button`
 
  border: 0;
  outline: none;
  padding: 0;
  margin: 0;
  display: flex; 
  justify-content: center; 
  align-items: center;
  width: 100%; /* Makes the button responsive */

  :hover > img {
    opacity: 0.5;
  }

  img {
    object-fit: contain; 
    max-height: 350px; 
    max-width: 100%; 
    height: auto; 
    margin: auto;
   
    @media (max-width: 860px) {
      max-height: 250px; 
    }
  }
`;
