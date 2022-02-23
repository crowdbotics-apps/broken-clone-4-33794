import React, { Component } from 'react';
import './ProductDetailsView.css';
import BreadCrumbs from './BreadCrumbs/BreadCrumbs';
import ProductsListFourProducts from './ProductsListFourProducts/ProductsListFourProducts';
import Product from './Product/Product';
import APIContext from '../../Contexts/APIContext';

const ProductDetailsView = ()=> {

    return (
      <div className="d-flex col-12 jc-c product-details-page">
        <div className="flex-column ai-c col-9">
          <BreadCrumbs />
          <div className="product-details">
            <Product />
          </div>
          <div className="flex-column jc-c product-details-product-block">
            <p className="text-center fw-bold product-block-header">You May Also Like</p>
            <div className="d-flex">
              <div className="product-list-wrapper">
                <ProductsListFourProducts />
              </div>
            </div>
          </div>
        </div>
      </div>
    );

}

export default ProductDetailsView;
