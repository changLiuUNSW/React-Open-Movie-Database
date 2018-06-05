import { injectGlobal } from 'styled-components';
import reset from 'styled-reset';

export default injectGlobal`
  ${reset}
  label {
    display:inline-block;
    margin-bottom: .5rem;
  }
  small {
    font-size: 80%;
    font-weight: 400;
  }
`;
