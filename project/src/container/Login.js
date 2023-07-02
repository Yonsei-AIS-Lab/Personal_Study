import React from 'react';
import {LoginWrapper, Content, LabelInput, Button} from '../component/Auth';


const Login = ({title,children}) => {
  return (
        <div>
        <LoginWrapper>
          <Content title="로그인">
            <LabelInput label="이메일" name="email" placeholder="이메일"/>
            <LabelInput label="비밀번호" name="password" placeholder="비밀번호" type="password"/>
            <Button>로그인</Button>
          </Content>
        </LoginWrapper>
        </div>
        
  );
};

export default Login;