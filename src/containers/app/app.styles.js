import styled from 'styled-components';

import { Paper } from '@material-ui/core';

/* -------------------------------------------------------------------------- */

export const Wrapper = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 48px;
`;

export const HeaderContainer = styled.div`
  height: 100px;
`;

export const StyledPaper = styled(Paper)`
  padding: 16px;
  min-height: 120px;
`;
