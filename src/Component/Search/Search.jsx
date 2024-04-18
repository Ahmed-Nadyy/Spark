import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

`;

const Form = styled.form`
  position: relative;
`;

const Input = styled.input`
  padding: 15px 40px 15px 20px;
  width: 190px;
  height: 40px;
  color: #525252;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 100;
  letter-spacing: 2px;
  border: 2px solid #fff; /* Add border style here */
  border-radius: 25px;
  background: linear-gradient(to right, #FFFFFF 0%, #F9F9F9 100%);
  transition: width 0.4s ease;
  outline: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:focus {
    width: 490px;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
    border-color: #962DFF; /* Change border color on focus if needed */
  }

  @media screen and (max-width: 992px) {
    padding: 15px 40px 15px 20px;
  width: 150px;
  height: 42px;
  color: #525252;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 100;
  letter-spacing: 2px;
  border: 2px solid #fff; /* Add border style here */
  border-radius: 25px;
  background: linear-gradient(to right, #FFFFFF 0%, #F9F9F9 100%);
  transition: width 0.4s ease;
  outline: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:focus {
    width: 360px;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
    border-color: #962DFF; /* Change border color on focus if needed */
  }
  }
  
  @media screen and (max-width: 768px) {
    padding: 15px 40px 15px 20px;
    width: 140px;
    height: 35px;
    color: #525252;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 100;
    letter-spacing: 2px;
    border: 2px solid #fff; /* Add border style here */
    border-radius: 25px;
    background: linear-gradient(to right, #FFFFFF 0%, #F9F9F9 100%);
    transition: width 0.4s ease;
    outline: none;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
    &:focus {
      width: 260px;
      box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
      border-color: #962DFF; /* Change border color on focus if needed */
    }
  }
  
  @media screen and (max-width: 576px) {
    padding: 15px 40px 15px 20px;
    width: 120px;
    height: 25px;
    color: #525252;
    text-transform: uppercase;
    font-size: 10px;
    font-weight: 100;
    letter-spacing: 2px;
    border: 2px solid #fff; /* Add border style here */
    border-radius: 25px;
    background: linear-gradient(to right, #FFFFFF 0%, #F9F9F9 100%);
    transition: width 0.4s ease;
    outline: none;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-left:30px;
    &:focus {
      width: 150px;
      box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
      border-color: #962DFF; /* Change border color on focus if needed */
    }
  }
`;
const SearchButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  padding: 0 20px;
  border: none;
  background: transparent;
  cursor: pointer;
`;

const Icon = styled.i`
  color: #8233c5;
`;

function Search() {
  return (
    <Container className="w-100">
      <Form >
        <Input placeholder="Search..." className="js-search " type="text" />
        <SearchButton type="submit">
          <Icon className="fa fa-search" />
        </SearchButton>
      </Form>
    </Container>
  );
}

export default Search;
