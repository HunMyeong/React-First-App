import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Home = () => {
  return <HomeContainer>홈 컨테이너</HomeContainer>;
};
