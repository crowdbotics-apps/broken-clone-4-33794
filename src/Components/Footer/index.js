import operator from '../../Assets/operator.svg';
const Footer = () => {
  return <footer className="bg-primary mt-4">
    <div className="container text-white py-3">
      <div className="d-flex flex-column flex-md-row justify-content-between">
        <div className="text-center flex-grow-1 text-md-start mb-4 pe-3">
          <span>Powered by</span>
          <img src={operator} alt="operator" />
        </div>
        <div className="row text-center text-md-start g-4">
          <div className="col-md-6 col-lg-4">
            <strong className="d-block mb-2">Company</strong>
            <ul className="nav flex-column">
              <li className="nav-item mb-1">About Operator</li>
              <li className="nav-item mb-1">Twitter</li>
              <li className="nav-item mb-1">Discord</li>
              <li className="nav-item mb-1">Telegram</li>
              <li className="nav-item mb-1">Whitepaper</li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-4">
            <strong className="d-block mb-2">For Developers</strong>
            <ul className="nav flex-column">
              <li className="nav-item mb-1">Github</li>
              <li className="nav-item mb-1">Documentation</li>
              <li className="nav-item mb-1">Earn Operator Tokens</li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-4">
            <strong className="d-block mb-2">For Merchants</strong>
            <ul className="nav flex-column">
              <li className="nav-item mb-5">Claim Your Account</li>
              <li className="nav-item mb-1">Unlike other marketplaces, Operator doesn't charge a middleman fee.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
};

export default Footer;
