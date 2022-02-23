import React, { useContext } from 'react';
import APIContext from '../../Contexts/APIContext';
import './ViewList.css';
import ProductsList from './ProductsList/ProductsList';
import Dropdown from '../Dropdown';
import ProductError from './ProductError';
import { SORT_BY_OPTIONS } from '../../constants';

const SearchOverView = ({ total, keyword }) => {
  return keyword && <p className="mb-0">
    Showing {new Intl.NumberFormat().format(total)} results for“<span className="fw-bold">{keyword}</span>”
    </p>
};

const ViewList = () => {
  const { 
    getProducts, 
    productFetchError, 
    refresh, 
    searchKeyWord, 
    totalProducts, 
    productFilters,
    loading 
  } = useContext(APIContext);
  const { order_by, sort_by } = productFilters;
  return (
    <div className="view-list">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="d-flex ai-c">
          <span className="pe-1">Sorty by</span>
          <Dropdown
            className="fw-bold"
            options={SORT_BY_OPTIONS}
            value={JSON.stringify({
              order_by,
              sort_by
            })}
            onSelect={({ value }) => {
              getProducts(JSON.parse(value))
            }}
          />
        </div>
        <div className="flex">
          {!loading &&
            <SearchOverView
              total={totalProducts}
              keyword={searchKeyWord}
            />}
        </div>
      </div>
      <div className="product-list-wrapper">
        {productFetchError ?
          <ProductError refresh={refresh} />
          : <ProductsList />
        }
      </div>
    </div>
  );

}

export default ViewList;
