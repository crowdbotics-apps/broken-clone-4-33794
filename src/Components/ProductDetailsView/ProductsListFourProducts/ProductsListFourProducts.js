import React, { useContext } from 'react';
import './ProductsListFourProducts.css';
import classnames from 'classnames';
import APIContext from '../../../Contexts/APIContext';
import ProductBlock from '../../ViewList/ProductBlock/ProductBlock';
import Loader from '../../Loader';


const ProductsListFourProducts = () => {
    let { products, loading, test } = useContext(APIContext);

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

    const WrappedLoader = ({
      className
    }) => {
      return <div className={"d-flex align-items-center jc-sb col-12"}>
        <ProductBlockLoader />
        <ProductBlockLoader />
        <ProductBlockLoader />
        <ProductBlockLoader />
      </div>
    }
    
    return (
        <>
            {loading ? <WrappedLoader className="mt-5 pt-5" /> 
                :
                <div className="d-flex justify-content-center align-items-center pt-5 mt-5">
                    <div className="products-wrapper">
                            {products.slice(0,4).map((product) => <ProductBlock key={product.productID} productData={product} />)}
                            {console.log(test)}
                    </div>
                </div>
            }
        </>
    );
};
export default ProductsListFourProducts
