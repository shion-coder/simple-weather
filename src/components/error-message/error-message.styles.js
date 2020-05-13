import styled from 'styled-components';

import { SnackbarContent } from '@material-ui/core';
import ErrorIcon from '@material-ui/icons/Error';
import CloseIcon from '@material-ui/icons/Close';

/* -------------------------------------------------------------------------- */

export const StyledSnackbarContent = styled(SnackbarContent)`
  background-color: #d32f2f;
`;

export const Message = styled.span`
  display: flex;
  align-items: center;
`;

export const StyledErrorIcon = styled(ErrorIcon)`
  font-size: 20px;
  opacity: 0.9;
  margin-right: 8px;
`;

export const StyledCloseIcon = styled(CloseIcon)`
  font-size: 20px;
  opacity: 0.9;
  margin-right: 8px;
`;
