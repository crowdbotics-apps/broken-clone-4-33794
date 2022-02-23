import React, { Component } from 'react'
import Header from '../../Components/Header/Header'
import ProductDetailsView from '../../Components/ProductDetailsView/ProductDetailsView'
import APIProvider from '../../Contexts/APIContext';
import API from '../../services/api';
import axios from 'axios';

class ProductDetails extends Component {
    constructor(props) {
        super(props);

        const productDetails = JSON.parse(sessionStorage.productDetails);
        console.log(productDetails)
        this.state = {
            product:{
                checkoutLink: productDetails.checkoutLink,
                currencycode: productDetails.currencycode,
                description: productDetails.description,
                id: productDetails.id,
                images:productDetails.images,
                maxPrice: productDetails.maxPrice,
                merchant: productDetails.merchant,
                minPrice: productDetails.minPrice,
                productID: productDetails.productID,
                quantity: productDetails.quantity,
                title: productDetails.title,
                vendor: productDetails.vendor
            },
            products: [],
            productLoading: true,
            loadingProduct: true,
            productFilters: productDetails.title,
            test:{}
        }

    }

     getProducts = async (filters = {}) => {
        const { data } = await API.get('/api/products', {
            price_max: 10000000000,
            ...filters
        });
        this.setState({
            products: data.value,
            productLoading: false
        })
    }

    getProduct = async (filters = {}) => {
        const productDetails = JSON.parse(sessionStorage.productDetails);
        const { productData } = await API.get('/api/product', {
            productID:productDetails.productID,
        });
        this.setState({
            test: productData,
            loadingProduct: false
        })
    }
 
    componentDidMount() {
        this.getProducts(this.state.productFilters);
        this.getProduct();
    }

    render() {
        return (
            <div className="main">
                <Header />
                <APIProvider.Provider value={{
                    products: this.state.products,
                    product: this.state.product,
                    loading: this.state.productLoading,
                    loadingProduct: this.state.loadingProduct,
                    getProducts: this.getProducts,
                    test: this.state.test
                }} >
                    <ProductDetailsView />
                </APIProvider.Provider>
            </div>
        );
    }
}

export default ProductDetails
