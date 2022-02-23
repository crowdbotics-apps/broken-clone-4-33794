import React, { useState } from 'react'
import './HeaderCategories.css'
import API from '../../services/api'

const HeaderCategories = props => {

    const [categories, setCategories] = useState([]);
    const [active, setActive] = useState('');

    const getCategory = async () => {
        // TODO Adding multiple categories
        try {
            let { data } = await API.get('/api/category/list', {lvl: 1});
            data = data.value.filter( i => i.title === 'Health' );
            setCategories(data);

        } catch (error) {
            setCategories(error.message);
        }

    }
    if (!categories.length) {
        getCategory();
    }

    const handleCategoryChange = event => {
        let title = event.target.dataset.title;

        setActive(title);
        props.changeCategoryBar(title);
    }

    return (
        <div className="cat-bar-wrapper flex">
            <h3>Category</h3>
            <ul className="cat-list flex ai-c fw-w">
                {categories.map((category) => (
                    <li
                        data-title={category.title}
                        key={category.id}
                        className={`cat-list__item ${active === category.title ? "active" : ""}`}
                        onClick={handleCategoryChange}>{category.title}
                    </li>
                ))}

            {/* temp button */}
                <li
                    data-title=""
                    className={`cat-list__item ${active === "" ? "active" : ""}`}
                    onClick={handleCategoryChange}>All categories..
                </li>
            </ul>
        </div>
    )
}
export default HeaderCategories