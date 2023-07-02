import React from 'react';
import {LoginWrapper, Content, LabelInput, Button} from '../component/Auth';

const Login = ({title,children}) => {
  return (
        <div>
        <LoginWrapper>
          <Content title="회원가입">
            <LabelInput label="이름" name="email" placeholder="이메일"/>
            <LabelInput label="생년월일" name="email" placeholder="이메일"/>
            <LabelInput label="회원가입 목적 3가지 중 선택으로" name="email" placeholder="이메일"/>
            <LabelInput label="이메일" name="email" placeholder="이메일"/>
            <LabelInput label="비밀번호" name="password" placeholder="비밀번호" type="password"/>
            <LabelInput label="비밀번호 확인" name="password" placeholder="비밀번호" type="password"/>
            <Button>회원가입</Button>
          </Content>
        </LoginWrapper>
        </div>
        
  );
};

export default Login;