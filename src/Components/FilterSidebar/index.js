import React, {Component} from 'react'
import './styles.css'
import APIContext from '../../Contexts/APIContext'
import {debounce} from 'lodash'
import FilterBrand from './FilterBrand'

class FilterSidebar extends Component {

    static contextType = APIContext;

    constructor(props) {
        super(props);
        this.state = {
            verified: false,
            in_stock: false,
            price_range: false,
            price_min: '',
            price_max: '',
            qty1: false,
            qty6: false,
            qty12: false,
        }
    }

    handleGetProducts() {
        let {verified, in_stock, price_min, price_max, price_range} = this.state
        let queryData = {verified, in_stock, price_min, price_max}

        if (queryData.price_min.length > 0 && queryData.price_max.length > 0) {
            if (+queryData.price_max <= +queryData.price_min) {
                queryData.price_min = queryData.price_max
            }

            this.setState({
                price_min: queryData.price_min,
            })
        }

        if (price_range === 'priceLess10') {
            queryData.price_min = ''
            queryData.price_max = '10'
        }

        if (price_range === 'priceLess30') {
            queryData.price_min = '10'
            queryData.price_max = '30'
        }

        if (price_range === 'priceMore30') {
            queryData.price_min = '30'
            queryData.price_max = ''
        }

        this.setState({
            price_min: queryData.price_min,
            price_max: queryData.price_max,
        })


        for (let index in queryData) {
            if (!queryData[index]) delete queryData[index]
        }

        this.props.changeProductFilterBar(queryData);
    }

    // Filter checkbox & radio
    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'radio' ? target.value : target.checked;

        this.setState({
            [target.name]: value
        }, this.handleGetProducts);
    }

    // Min Max inputs delay
    debounceLog = debounce(() => this.handleGetProducts(), 1500)

    // Min Max inputs
    handleValueChange = (event) => {
        const num = /^[0-9\b]+$/;
        const target = event.target;

        if (target.value === '' || num.test(target.value)) {

            this.setState({
                [target.name]: target.value,
                price_range: false,
            })
            this.debounceLog();
        }
    }

    render() {

        return (
                <div className="filter-wrapper sticky-top">

                    <div className="filter-box">

                        <h3 className="filter-box__title">Show only</h3>

                        <div className="filter-box__el flex ai-c">
                            <input
                                id="verified"
                                className="verified"
                                type="checkbox"
                                name="verified"
                                checked={this.state.verified}
                                onChange={this.handleInputChange}/>
                            <label htmlFor="verified">Verified Merchants</label>
                        </div>

                        <div className="filter-box__el flex ai-c">
                            <input
                                id="in_stock"
                                className="in_stock"
                                type="checkbox"
                                name="in_stock"
                                checked={this.state.in_stock}
                                onChange={this.handleInputChange}/>
                            <label htmlFor="in_stock">In-Stock Products</label>
                        </div>

                    </div>

                    <div className="filter-box price">

                        <h3 className="filter-box__title">Price</h3>

                        <div className="filter-box__el flex ai-c">
                            <input
                                id="less_10"
                                className="price_range"
                                type="radio"
                                name="price_range"
                                value="priceLess10"
                                checked={this.state.price_range === 'priceLess10'}
                                onChange={this.handleInputChange}/>
                            <label htmlFor="less_10">Less than $10</label>
                        </div>

                        <div className="filter-box__el flex ai-c">
                            <input
                                id="price_30"
                                className="price_range"
                                type="radio"
                                name="price_range"
                                value="priceLess30"
                                checked={this.state.price_range === 'priceLess30'}
                                onChange={this.handleInputChange}/>
                            <label htmlFor="price_30">$10 - $30</label>
                        </div>

                        <div className="filter-box__el flex ai-c">
                            <input
                                id="price_up"
                                className="price_range"
                                type="radio"
                                name="price_range"
                                value="priceMore30"
                                checked={this.state.price_range === 'priceMore30'}
                                onChange={this.handleInputChange}/>
                            <label htmlFor="price_up">$30 and up</label>
                        </div>

                        <div className="filter-box__el flex jc-sb min-max__wrapper">

                            <div className="min-max flex fd-c min">
                                <label htmlFor="min_price">Min</label>
                                <span className="curr">$</span>
                                <input
                                    id="min_price"
                                    className="min_price"
                                    name="price_min"
                                    type="text"
                                    value={this.state.price_min}
                                    placeholder="25"
                                    onChange={this.handleValueChange}/>
                            </div>

                            <div className="min-max flex fd-c max">
                                <label htmlFor="max_price">Max</label>
                                <span className="curr">$</span>
                                <input
                                    id="price_max"
                                    className="price_max"
                                    name="price_max"
                                    type="text"
                                    value={this.state.price_max}
                                    placeholder="25000"
                                    onChange={this.handleValueChange}/>
                            </div>

                        </div>

                    </div>

                    <div className="filter-box quantity">

                        <h3 className="filter-box__title">Quantity</h3>

                        <div className="filter-box__el flex ai-c">
                            <input
                                id="qty1"
                                className="checkbox"
                                type="checkbox"
                                name="qty1"
                                checked={this.state.qty1}
                                onChange={this.handleInputChange}/>
                            <label htmlFor="qty1">1</label>
                        </div>

                        <div className="filter-box__el flex ai-c">
                            <input
                                id="qty6"
                                className="checkbox"
                                type="checkbox"
                                name="qty6"
                                checked={this.state.qty6}
                                onChange={this.handleInputChange}/>
                            <label htmlFor="qty6">6 ct.</label>
                        </div>

                        <div className="filter-box__el flex ai-c">
                            <input
                                id="qty12"
                                className="checkbox"
                                type="checkbox"
                                name="qty12"
                                checked={this.state.qty12}
                                onChange={this.handleInputChange}/>
                            <label htmlFor="qty12">12 ct.</label>
                        </div>

                    </div>

                    <div className="filter-box brand">
                        <h3 className="filter-box__title">Brand</h3>
                        <FilterBrand changeBrandsFilterBar={this.props.changeBrandsFilterBar}/>
                    </div>
                </div>
        )
    }
}

export default FilterSidebar