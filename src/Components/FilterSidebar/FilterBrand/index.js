import React, {useState} from 'react'
import Multiselect from 'multiselect-react-dropdown'
import './styles.scss'
import API from '../../../services/api'

const FilterBrand = (props) => {

    const [brands, setBrands] = useState([])
    const [fn, setFn] = useState(false)

    const getBrands = async search => {

        setFn(true)

        try {
            const {data} = await API.get('/api/brand/list', {search});
            setBrands(data.value)

        } catch (error) {
            console.log(error.message)
        }

    }

    if (!fn) {
        getBrands()
    }

    // Filter checkbox & radio
    const handleOptionChange = event => {
        props.changeBrandsFilterBar(event);
    }


    return (
        <>
            <Multiselect
                options={brands}
                onSelect={handleOptionChange}
                onRemove={handleOptionChange}
                showCheckbox={true}
                isObject={false}
                onSearch={getBrands}
                avoidHighlightFirstOption={true}
            />
        </>
    )
}

export default FilterBrand