import React, { useContext, useState } from "react";
import {
  Error,
  Form,
  GoogleBtn,
  GoogleLogo,
  ImgPhoto,
  Input,
  RightBox,
  Title,
  Toggle,
  Wrapper,
} from "./styles";
import { Link, useNavigate } from "react-router-dom";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase";
import { FirebaseError } from "firebase/app";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    if (isLoading || email === "" || password === "") return;
    setIsLoading(true);
    try {
      setIsLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (e) {
      alert("일치하는 정보가 없습니다.");
      console.log(e);
      if (e instanceof FirebaseError) {
        switch (e.code) {
          case "auth/weak-password":
            setError("비밀번호는 6자리 이상이어야 합니다.");
            break;
          case "auth/invalid-email":
            setError("잘못된 이메일 주소입니다.");
            break;
          case "auth/email-already-in-use":
            setError("이미 가입되어 있는 계정입니다.");
            break;
        }
      }
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const googleClick = async (select: string) => {
    try {
      if (select === "google") {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);
      }
      navigate("/");
    } catch (e) {}
  };
  return (
    <Wrapper>
      <ImgPhoto src="/images/login.jpg" alt="사진"></ImgPhoto>
      <RightBox>
        <Form onSubmit={onSubmit}>
          <Title>로그인</Title>
          <Input
            type="email"
            placeholder="이메일"
            value={email}
            name="email"
            required
            onChange={onChange}
          />
          <Input
            type="password"
            placeholder="비밀번호"
            name="password"
            value={password}
            required
            onChange={onChange}
          />
          <Input type="submit" value={isLoading ? "로딩중" : "로그인"} />
        </Form>
        {error === "" ? null : <Error>{error}</Error>}
        <GoogleBtn onClick={() => googleClick("google")}>
          <GoogleLogo src="/images/google.svg" />
          구글 로그인
        </GoogleBtn>
        <Toggle>
          회원이 아니라면? <Link to={"/signup"}>회원가입</Link>하기
        </Toggle>
      </RightBox>
    </Wrapper>
  );
};
