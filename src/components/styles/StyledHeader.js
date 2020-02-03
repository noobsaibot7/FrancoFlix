import styled from "styled-components";

export const StyledHeader = styled.div`
  position:sticky;
  top:0px;
  border-top: 0px;
  background-color: ${props => (props.themen ? "rgba(0, 0, 0, 1)" : "#414A4C")};
  padding: 0 20px;
  box-sizing: border-box;
  transition: background-color 1.24s ease-in-out;
  width: 100%;
  height: 80px;
  display: flex;
  z-index: 10000;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px;

    @media screen and (max-width: 500px) {
      max-width: 1280px;
      min-height: 0px;
  }

`;

export const StyledRMDBLogo = styled.img`
  width: 250px;
  margin-top: 20px;
  margin-left: 20px;

  @media screen and (max-width: 500px) {
    width: 150px;
    margin-top: 5px;
    margin-left: 20px;
  }
`;

export const StyledTMDBLogo = styled.button`
  width: 122px;
  margin-top: 25px;
  background-color: transparent;
  border: 0;
  margin-right: 20px;

  @media screen and (max-width: 500px) {
    display: inline-block;
    width: 80px;
    margin-top: 0px;
    margin-right: 10px;
  }
`;
