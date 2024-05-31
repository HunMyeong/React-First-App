import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 100px 0px;
`;

export const ImgPhoto = styled.img`
  width: 50%;
  height: 100%;
`;

export const Title = styled.h1`
  font-size: 40px;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  align-items: center;
  width: 100%;
`;

export const Input = styled.input`
  border-radius: 50px;
  border: none;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 15px;
  height: 35px;
  &[type="submit"] {
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
    margin-bottom: 40px;
  }
`;

export const Error = styled.p`
  color: tomato;
  font-size: 13px;
  margin-top: 5px;
`;

export const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
  padding: 0px 20px;
`;

export const GoogleBtn = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  width: 85%;
  border: 1px solid black;
  background-color: white;
  height: 40px;
  border-radius: 50px;
  cursor: pointer;
  color: black;
  padding: 0px 15px;
`;

export const GoogleLogo = styled.img`
  height: 30px;
  margin-right: 15px;
`;

export const Toggle = styled.span`
  margin-top: 18px;
  a {
    color: blueviolet;
  }
`;
