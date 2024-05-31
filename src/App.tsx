import { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { auth } from "./firebase";
import { LoadingScreen } from "./components/Loading/Loading-screen";
import { RouterProvider } from "react-router-dom";
import { RouterPath } from "./RouterPath";

const GlobalStyle = createGlobalStyle`
  ${reset};
  *{
    box-sizing: border-box;
  }
  body {
    background-color: black;
    color: white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const init = async () => {
    await auth.authStateReady();
    setIsLoading(false);
  };

  useEffect(() => {
    setTimeout(init, 2000);
  }, []);

  return (
    <Wrapper>
      <GlobalStyle />
      {isLoading ? <LoadingScreen /> : <RouterProvider router={RouterPath} />}
    </Wrapper>
  );
}

export default App;
