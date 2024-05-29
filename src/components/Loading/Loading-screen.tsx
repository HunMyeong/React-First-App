import { RotateLoader } from "react-spinners";
import { LoadingBox } from "./Loading-Screen";

export const LoadingScreen = () => {
  return (
    <LoadingBox>
      <RotateLoader
        color="#36d7b7" //색상
        margin={100} //스피너 하나의 거리
        size={30} // 스피너 크기
        speedMultiplier={1} // 스피너 속도
      />
    </LoadingBox>
  );
};
