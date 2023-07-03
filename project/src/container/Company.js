import React from 'react';
import styled from "styled-components";

import CompanySidebar from '../component/Sidebar/CompanySidebar';

const Body = styled.div`
  height: 92vh;
  display: flex;
  flex-direction: row;
`

const Company = () => {
  return (
      <Body>
      <CompanySidebar/>
      <div>
        <h4>Company</h4>
      </div>
      </Body>
      
  );
};

export default Company;