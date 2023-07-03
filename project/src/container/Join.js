import React from 'react';
import {Content, LabelInput, Button} from '../component/Auth';
import JoinWrapper from '../component/Auth/JoinWrapper';

const Login = ({title,children}) => {
  return (
        <div>
        <JoinWrapper>
          <Content title="회원가입">
            <LabelInput label="아이디" name="ID" placeholder="아이디"/>
            <LabelInput label="비밀번호" name="password" placeholder="비밀번호"/>
            <LabelInput label="비밀번호 확인" name="password check" placeholder="비밀번호 확인"/>
            <LabelInput label="이름" name="name" placeholder="이름"/>
            <LabelInput label="생년월일" name="birth" placeholder="생년월일"/>
            <LabelInput label="이메일" name="email" placeholder="이메일"/>
            <LabelInput label="휴대폰" name="phone" placeholder="휴대폰"/>
            <LabelInput label="소속" name="" placeholder="소속"/>
            <LabelInput label="관람객,기업 선택" name="password" placeholder="관람객,기업 선택"/>
            <Button>회원가입</Button>
          </Content>
        </JoinWrapper>
        </div>
        
  );
};

export default Login;