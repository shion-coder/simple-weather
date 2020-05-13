import styled from 'styled-components';

import { FormControl, RadioGroup } from '@material-ui/core';

/* -------------------------------------------------------------------------- */

export const Title = styled.div`
  margin-left: 8px;
  font-weight: 400;
  letter-spacing: 2px;
`;

export const StyledFormControl = styled(FormControl)`
  margin-left: auto;
  margin-right: 30px;
`;

export const StyledRadioGroup = styled(RadioGroup)`
  display: flex;
  flex-direction: row;
`;
