import React from 'react';
import styled from "styled-components";

import ManageSidebar from '../component/Sidebar/ManageSidebar';

const Body = styled.div`
  height: 92vh;
  display: flex;
  flex-direction: row;
`

const Manage = () => {
  return (
        <Body>
        <ManageSidebar/>
        <div>
        <h4>Manage</h4>
        </div>
        </Body>
  );
};

export default Manage;