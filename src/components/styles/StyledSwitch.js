import styled from "styled-components";

const StyledSwitch = styled.div`
  display: flex;
  width: 122px;
  margin: 25px 0 20px 0;
  border: 0;
  align-items: center;
  padding: 0;


  @media screen and (max-width: 500px) and (max-width: 350px) {
    display: inline-block;
    width: 80px;
    margin-top: 0px;
    align-items: center;
  }

  span {
    font-size: 1.2em;
    background: none;
    border: none;
    cursor: pointer;
    transition: color 0.3s ease;
    margin-top: 4px;
    margin-right: 2px;
  }

  span:last-child {
    margin-top: 5px;
  }

  input[type="checkbox"].checkbox {
    width: 40px;
    height: 10px;
    background: #555;
    position: relative;
    border-radius: 5px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;
    vertical-align: 2px;
    outline: none;
  }

  input[type="checkbox"].checkbox:checked + label {
    left: 30px;
  }

  input[type="checkbox"].checkbox:focus-visible {
    outline: solid 2px white;
  }

  input[type="checkbox"].checkbox + label {
    display: inline-block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    transition: all 0.3s ease;
    cursor: pointer;
    position: absolute;
    left: 2px;
    opacity: 0.9;
    background-color: #f1f1f1;
  }

  .toggle {
    position: relative;
    padding: 0 4px;
    display: flex;
    align-items: center;
  }
`;

export default StyledSwitch;
