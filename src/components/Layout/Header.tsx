import styled from "styled-components";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

export const HeaderDiv = styled.div``;

export const LogOutBtn = styled.button`
  width: 50px;
  font-size: 16px;
`;

export const Header = () => {
  const navigate = useNavigate();

  const LogOut = () => {
    if (confirm("로그아웃 하겠습니까?")) {
      auth.signOut();
      navigate("/signup");
    }
  };
  return (
    <HeaderDiv>
      <LogOutBtn onClick={LogOut}>로그아웃</LogOutBtn>
    </HeaderDiv>
  );
};
