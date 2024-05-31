import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { HeaderDiv, LogOutBtn } from "./Styles";

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
