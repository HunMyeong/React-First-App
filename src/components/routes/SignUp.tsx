import React, { useState } from "react";
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
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase";
import { FirebaseError } from "firebase/app";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    if (isLoading || name === "" || email === "" || password === "") return;
    setIsLoading(true);

    try {
      const userInfo = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userInfo.user, {
        displayName: name,
      });
      navigate("/");
    } catch (e) {
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
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Wrapper>
      <ImgPhoto src="/images/0.jpg" alt="사진"></ImgPhoto>
      <RightBox>
        <Form onSubmit={onSubmit}>
          <Title>회원가입</Title>
          <Input
            type="text"
            placeholder="이름"
            value={name}
            name="name"
            required
            onChange={onChange}
          />
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
          <Input type="submit" value={isLoading ? "로딩중" : "회원가입"} />
        </Form>
        {error === "" ? null : <Error>{error}</Error>}
        <GoogleBtn onClick={() => googleClick("google")}>
          <GoogleLogo src="/images/google.svg" />
          구글 가입하기
        </GoogleBtn>
        <Toggle>
          이미 가입했다면? <Link to={"/"}>로그인</Link>하기
        </Toggle>
      </RightBox>
    </Wrapper>
  );
};
