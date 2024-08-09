import { Link } from 'react-router-dom';
import logoDark from '../../assets/img/logo-dark.png';
import logoLight from '../../assets/img/logo-light.png';
import RefiStarterLogo from '../../assets/img/img/icons/refi-starter-logo.png';

// eslint-disable-next-line react/prop-types
const LogoDark = ({ light }) => {
  return (
    <Link to='/'>
      <img
        src={light ? RefiStarterLogo : RefiStarterLogo}
        alt='Refi Starter'
        width='96'
        height='24'
      />
    </Link>
  );
};

export default LogoDark;
