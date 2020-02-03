import React from "react";
import Styled from "styled-components";
import PropTypes from 'prop-types'

import { StyledHeroImage } from "../styles/StyledHeroImage";

// const StyledHeromImage = Styled.div`
//     background: ${props => `
//     linear-gradient(
//         to bottom, rgba(0,0,0,0)
//         39%, rgba(0,0,0, 0.5)
//         41%, rgba(0,0,0,0)
//         100%
//     ), url('${props.image}'), #1c1c1c`};
//     background-size: 100%, cover !important;
//     background-position: center, center !importaant;
//     animation; animatedHero 2s;

//     .heroimage-content{
//         max-width: 1280px;
//         padding: 20px;
//         margin: 0 auto;
//     }

//     .heroimage-text{
//         z-index: 100;
//         max-width: 700px;
//         position: absolute;
//         bottom: 40px;
//         margin-right: 20px;
//         min-height: 100px;
//         background: rgba(0, 0, 0, 0);
//         color: #fff;  

//         h1{
//             font-family: 'Abel', sans-serif;
//       font-size: 48px;
//       color: #fff;  

//             @media screen and (max-width: 500px){
//                 font-size: 24px;
//                 color: #ff
//             }
//         }

//         p{
//             font-family: 'Abel', sans-serif;
//       font-size: 22px;
//       line-height: 26px;
//       color: #fff;

//             @media screen and (max-width: 720px) {
//                 font-size: 16px;
//                 line-height: 20px;
//                 color: #fff;
//             } 
//         }
//     }

//     @keyframes animatedHero{
//         from{
//             opacity: 0;
//         }
//         to{
//             opacity: 1;
//         }
//     }

// `;

const HeroImage = ({ title, image, text }) => {
  return (
    <StyledHeroImage image={image}>
      <div className="heroimage-content">
        <div className="heroimage-text">
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </div>
    </StyledHeroImage>
  );
};

HeroImage.propTypes = {
  image: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string
}

export default HeroImage;
