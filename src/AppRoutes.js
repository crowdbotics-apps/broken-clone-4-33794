import {Route, Routes, useLocation} from 'react-router-dom'
import MarketplaceSearch from './Pages/MarketplaceSearch/MarketplaceSearch';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Home from './Pages/Home';


const AppRoutes = () => {

    const location = useLocation()

    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/marketplace" element={<Home />} />
            <Route path="/marketplace/products" element={ <MarketplaceSearch/> }/>
            <Route path="/marketplace/product-details" element={ <ProductDetails/> }/>
        </Routes>
    )
}

export default AppRoutes