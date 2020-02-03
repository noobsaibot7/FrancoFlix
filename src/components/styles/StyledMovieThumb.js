import styled from 'styled-components';

export const StyledMovieThumb = styled.div`
  img {
    width: 100%;
    height: auto;
    transition: all 0.3s;
    object-fit: cover;
    border-radius: 20px;
    transition: transform .2s;
    

    :hover {
      opacity: 0.9;
      transform: ${props=>props.clickable ? "scale(1.17)": "scale(1)"};
    }


    .clickable {
      cursor: pointer;
    }
  }
`;
