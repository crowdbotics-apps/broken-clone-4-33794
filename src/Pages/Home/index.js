/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';

import './styles.scss';
import marketPlaceLogo from '../../Assets/Marketplace.svg';
import byOperatorLogo from '../../Assets/byOperator.svg';
import SearchInput from '../../Components/Header/SearchInput';
import sponsoredBillboard from '../../Assets/sponsoredBillboard.svg';
import magicMind from '../../Assets/magicMind.svg';
import ProductBlock from '../../Components/ViewList/ProductBlock/ProductBlock';
import Footer from '../../Components/Footer';
import bgElderStatesman from '../../Assets/bg-elder-statesman.png';
import bgSugarpill from '../../Assets/bg-sugarpill.png';
import bgSusaneKaufmann from '../../Assets/bg-susane-kaufmann.png';
import logoElderStatesman from '../../Assets/logo-elder-statesman.png';
import logoSugarpill from '../../Assets/logo-sugarpill.png';
import logoSusaneKaufmann from '../../Assets/logo-susane-kaufmann.png';
import API from '../../services/api';

const newArrivalLink = '/marketplace/products?order_by=DESC&sort_by=productCreatedAt'

const navElements = [
	{
		text: 'New Arrivals',
    url: newArrivalLink
	},
  {
    text: 'Top Sellers',
    url: '#'
  },
  {
    text: 'Our Favorites',
    url: '#'
  },
  {
    text: 'Suprise Me',
    url: '#'
  },
  {
    text: 'Browse All',
    url: '#'
  }
];

const categories = [
	'Electronics',
	'Collectibles & Art',
	'Fashion',
	'Toys & Hobbies',
	'Sporting Goods',
	'Movies & Music',
	'Books',
	'Home & Garden',
	'Business & Industrial',
	'Others',
];

const brands = [
	{
		bgUrl: bgSugarpill,
		logo: logoSugarpill,
		products: 105
	}, {
		bgUrl: bgElderStatesman,
		logo: logoElderStatesman,
		products: 18
	},
	{
		bgUrl: bgSusaneKaufmann,
		logo: logoSusaneKaufmann,
		products: 35
	}
];

const BrandCard = ({
	logo,
	products,
	bgUrl
}) => {
	const bgActive = 'radial-gradient(100% 100% at 50% 100.09%, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.5) 100%)';
	const bgInActive = 'radial-gradient(100% 100% at 50% 100.09%, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.5) 100%)';
	const [active, setActive] = useState(false);
	const onMouseEnter = () => {
		setActive(true)
	};
	const onMouseLeave = () => {
		setActive(false)
	}
	return <div style={{
		backgroundImage: `${active ? bgActive : bgInActive}, url(${bgUrl})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
	}}
		className="brand-card p-5 h-100 d-flex align-items-end justify-content-center"
		onMouseEnter={onMouseEnter}
		onMouseLeave={onMouseLeave}
	>
		<div className="d-flex flex-column text-center">
			<img src={logo} alt="brand-logo" className="img-fluid pb-3" />
			<a href="#" className="btn link-arrow">View {products} products</a>
		</div>
	</div>
};

const ProductBlockLoader = () => {
  return <div className="card border-0">
    <div className="placeholder-glow">
      <div className="placeholder p-5 w-100" />
    </div>
    <div className="card-body">
      <h5 className="card-title placeholder-glow">
        <span className="placeholder col-6"></span>
      </h5>
      <p className="card-text placeholder-glow">
        <span className="placeholder col-7 me-1"></span>
        <span className="placeholder col-4"></span>
        <span className="placeholder col-4 me-1"></span>
        <span className="placeholder col-6"></span>
        <span className="placeholder col-8"></span>
      </p>
    </div>
  </div>
}

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [productLoadError, setProductLoadError] = useState(null);
  const navigate = useNavigate();
  const getNewArrivalProducts = async () => {
    try {
      setLoading(true);
    const { data } = await API.get('/api/products', {
      limit: 12,
      order_by: 'DESC',
      sort_by: 'productCreatedAt'
    });
    setLoading(false);
    setProducts(data.value)
    } catch(error) {
      setProductLoadError(error);
    }
  }
  useEffect(() => {
    getNewArrivalProducts();
  }, []);

  const onSearchSubmit = (value) => {
    navigate(`/marketplace/products?search=${value}`)
  }

	return (
		<>
			<div className="container pt-4">
				<div className="d-flex align-items-center justify-content-center flex-column">
					<div className="mb-3">
						<img src={marketPlaceLogo} alt="market place logo" />
					</div>
					<img src={byOperatorLogo} alt="Operator" />
				</div>
				<hr />
				<ul className="nav justify-content-center mb-4">
					{navElements.map(({ text, url }) => (
						<li key={text} className="nav-item">
							<a className="nav-link" href={url}>
								{text}
							</a>
						</li>
					))}
				</ul>
				<div className="d-flex justify-content-center">
					<SearchInput onSubmit={onSearchSubmit} />
				</div>
				<Carousel variant="dark" className="mt-4" controls={false}>
					<Carousel.Item>
						<div
							className="p-3 py-5 p-md-5"
							style={{
								backgroundImage: `url(${sponsoredBillboard})`,
								backgroundRepeat: 'no-repeat',
								backgroundSize: 'cover',
							}}
						>
							<div className="row px-md-4">
								<div className="col-8 col-md-6 d-flex flex-column justify-content-center align-items-start">
									<h2>
										The World's First <br /> Productivity Drink
									</h2>
									<button className="btn btn-primary">Shop MagicMind Now</button>
								</div>
								<div className="col-4 col-md-6 d-flex justify-content-end">
									<img src={magicMind} alt="magic mind" className="img-fluid" />
								</div>
							</div>
						</div>
					</Carousel.Item>
					<Carousel.Item>
						<div
							className="p-3 py-5 p-md-5"
							style={{
								backgroundImage: `url(${sponsoredBillboard})`,
								backgroundRepeat: 'no-repeat',
								backgroundSize: 'cover',
							}}
						>
							<div className="row px-md-4">
								<div className="col-8 col-md-6 d-flex flex-column justify-content-center align-items-start">
									<h2>
										The World's First <br /> Productivity Drink
									</h2>
									<button className="btn btn-primary">Shop MagicMind Now</button>
								</div>
								<div className="col-4 col-md-6 d-flex justify-content-end">
									<img src={magicMind} alt="magic mind" className="img-fluid" />
								</div>
							</div>
						</div>
					</Carousel.Item>
					<Carousel.Item>
						<div
							className="p-3 py-5 p-md-5"
							style={{
								backgroundImage: `url(${sponsoredBillboard})`,
								backgroundRepeat: 'no-repeat',
								backgroundSize: 'cover',
							}}
						>
							<div className="row px-md-4">
								<div className="col-8 col-md-6 d-flex flex-column justify-content-center align-items-start">
									<h2>
										The World's First <br /> Productivity Drink
									</h2>
									<button className="btn btn-primary">Shop MagicMind Now</button>
								</div>
								<div className="col-4 col-md-6 d-flex justify-content-end">
									<img src={magicMind} alt="magic mind" className="img-fluid" />
								</div>
							</div>
						</div>
					</Carousel.Item>
				</Carousel>
				<div className="mt-4">
					<div className="d-flex align-items-center justify-content-between">
						<h2>New Arrivals</h2>
						<a href={newArrivalLink} className="text-decoration-none link-arrow">
							View more
						</a>
					</div>
					<div className="row g-3">
            {loading && !products.length && Array.from({ length: 6 }).map((_, index) => <div key={index} className="col-12 col-md-4 col-lg-2">
              <ProductBlockLoader />
            </div>)}
						{products.slice(0, 6).map((productData, index) => (
							<div key={index} className="col-12 col-md-4 col-lg-2">
								<ProductBlock loading={loading} productData={productData} />
							</div>
						))}
					</div>
				</div>
				<div className="mt-4">
					<div className="d-flex align-items-center justify-content-between">
						<h2>Today's Top Sellers</h2>
						<a href="#" className="text-decoration-none link-arrow">
							View more
						</a>
					</div>
					<div className="row g-3">
           {loading && !products.length && Array.from({ length: 6 }).map((_, index) => <div key={index} className="col-12 col-md-4 col-lg-2">
              <ProductBlockLoader />
            </div>)}
						{products.slice(6, 12).map((productData, index) => (
							<div key={index} className="col-12 col-md-4 col-lg-2">
								<ProductBlock loading={loading} productData={productData} />
							</div>
						))}
					</div>
				</div>
				<div className="mt-4">
					<div className="d-flex align-items-center justify-content-between">
						<h2>Our Favorite Brands</h2>
						<a href="#" className="text-decoration-none link-arrow">
							View more
						</a>
					</div>
					<div className="row g-5">
						{brands.map(({ logo, bgUrl, products }, key) => <div key={key} className="col-12 col-md-4">
							<BrandCard logo={logo} bgUrl={bgUrl} products={products} />
						</div>)}
					</div>
				</div>
				<div className="mt-4">
					<h2>Shop By Category</h2>
					<div className="row g-3">
						{categories.map((category) => (
							<div key={category} className="col-6 col-md-3">
								<div className="bg-light p-4 rounded text-center h-100 align-items-center d-flex justify-content-center">{category}</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;
