import PropTypes from 'prop-types';

const Loader = ({
  type
}) => {
    return <div className={`spinner-${type}`} role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
};

export default Loader;

Loader.propTypes = {
  type: PropTypes.string,
};

Loader.defaultProps = {
  type: 'grow'
};
