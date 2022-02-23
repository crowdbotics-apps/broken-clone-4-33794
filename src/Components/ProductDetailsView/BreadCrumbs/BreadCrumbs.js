import React, {useContext} from 'react';
import './BreadCrumbs.css';
import APIContext from '../../../Contexts/APIContext';
import ArrowRight from '../../../Assets/ChevronRight.png';

const BreadCrumbs = () => {

  const { product } = useContext(APIContext);

    return (
      <div className="flex-column ai-c col-9">
        <div className="d-flex ai-c category-trail">
          <p>{product.category}</p>
          <img src={ArrowRight} className="arrow-right" />
          <p>{product.vendor}</p>
          <img src={ArrowRight} className="arrow-right" />
          <p>{product.title}</p>
        </div>
      </div>
    );
}

export default BreadCrumbs;
