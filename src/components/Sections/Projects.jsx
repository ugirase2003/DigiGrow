import React from "react";
import styled from "styled-components";
// Components
import ProjectBox from "../Elements/ProjectBox";


import Qt1 from '../../assets/img/projectimg/qt1.jpg';
import Qt2 from '../../assets/img/projectimg/qt2.jpg';
import Qt3 from '../../assets/img/projectimg/qt3.jpg';

import Qt4 from '../../assets/img/projectimg/qt4.jpg';
import Qt6 from '../../assets/img/projectimg/qt5.jpg';

import Qt5 from '../../assets/img/projectimg/qt7.jpg';
import Qt7 from '../../assets/img/projectimg/qt8.jpg';
import Sp1 from '../../assets/img/projectimg/sp1.jpg';
import Sp2 from '../../assets/img/projectimg/sp2.jpg';
import Sp3 from '../../assets/img/projectimg/sp3.jpg';
import Sp4 from '../../assets/img/projectimg/sp4.jpg';
import Sp5 from '../../assets/img/projectimg/sp5.jpg';

import P2 from '../../assets/img/projectimg/2.png';
import P3 from '../../assets/img/projectimg/3.png';
import P4 from '../../assets/img/projectimg/4.png';
import P5 from '../../assets/img/projectimg/5.png';











export default function Projects() {
  return (
    <Wrapper id="projects">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Most Impactful Projects</h1>
            <p className="font13">
            Take a look at the projects we've carefully chosen to demonstrate the breadth of our expertise and the success we've achieved for our clients.
            </p>
          </HeaderInfo>
   
          <div className="row  textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                  images={[ Qt1,Qt2,Qt3,Qt4,Qt5,Qt6,Qt7]} 
                title="Qtrainers (Flutter)"
                text="Originally a website, Qtrainers has been transformed into a robust Flutter-based Android app. It connects trainees with expert trainers while offering organizations a streamlined platform to manage employee training. This app showcases the power of Flutter in delivering a responsive, efficient, and scalable solution for professional development need"
               
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                images={[ P2,P3,P4,P5]} 
                title="Animal Selling Platform"
                text="Developed as a college project, this platform provides a seamless interface for buying and selling animals. Designed with a focus on user experience, it features categorized listings, secure transactions, and easy communication between buyers and sellers. The project highlights the practical application of web development skills to create a functional and user-friendly solution for livestock trading."
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                  images={[ Sp1,Sp2,Sp3,Sp4,Sp5]} 
                title="Shopping Web App (React,Express js)"
                text="Built as a college project, this React-based shopping app offers a sleek and interactive platform tailored for students. It features a dynamic product catalog, user authentication, and a seamless cart and checkout process. The app showcases the potential of React in creating responsive and efficient e-commerce solutions for modern users."
                action={() => alert("clicked")}
              />
            </div>
          </div>
         
        </div>
      </div>
    
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  position: relative;
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;
