import React, { Component } from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Meta from '../components/Meta';

const StyledPage = styled.div`
  background: white;
  color: black;
`;

export default class Page extends Component {
  render() {
    return (
      <StyledPage>
        <Meta />
        <Header />
        {this.props.children}
      </StyledPage>
    )
  }
}
