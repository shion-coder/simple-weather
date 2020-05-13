import styled from 'styled-components';

import { Card, CardHeader } from '@material-ui/core';

/* -------------------------------------------------------------------------- */

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledCard = styled(Card)`
  width: 440px;
`;

export const StyledCardHeader = styled(CardHeader)`
  background-color: #f5f7f9;

  .MuiCardHeader-title {
    font-size: 24px;
  }
`;

export const Content = styled.div`
  padding-top: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
