import React from 'react';
import styled from "styled-components";

import CustomerSidebar from '../component/Sidebar/CustomerSidebar';

const Body = styled.div`
  height: 92vh;
  display: flex;
  flex-direction: row;
`

const Customer = () => {
  return (
    <Body>
      <CustomerSidebar />
      <div>
        <h4>Customer</h4>
      </div>
    </Body>
  );
};

export default Customer;