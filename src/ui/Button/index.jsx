import PropTypes from 'prop-types';
import SButton from './style';

const Button = ({ danger, warn, ok, color, children }) => {
  return (
    <SButton danger={danger} warn={warn} ok={ok} color={color} type="button">
      {children}
    </SButton>
  );
};

Button.propTypes = {
  danger: PropTypes.bool,
  warn: PropTypes.bool,
  ok: PropTypes.bool,
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
};
Button.defaultProps = {
  danger: false,
  warn: false,
  ok: false,
  color: null,
};

export default Button;
