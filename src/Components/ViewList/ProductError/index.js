import PropTypes from 'prop-types';

const ProductError = ({
  refresh,
  message
}) => {
  return <div className="d-flex flex-column justify-content-center align-items-center pt-5 mt-5">
    <p className="h5">{message}</p>
    <button onClick={refresh} className="btn btn-outline-secondary">Refresh to go back</button>
  </div>
};

export default ProductError;

ProductError.defaultProps = {
  refresh: () => {},
  message: 'Sorry, something went wrong!'
};

ProductError.propTypes = {
  refresh: PropTypes.func,
  message: PropTypes.string
};

