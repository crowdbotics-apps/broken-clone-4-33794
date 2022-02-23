import { useState } from 'react';
import PropTypes from 'prop-types';

import SearchIcon from '../../Icons/Search';
const SearchInput = ({ onSearch, value, onSubmit }) => {
	const onSubmitHandler = (e) => {
		e.preventDefault();
		const data = new FormData(e.target);
		onSubmit(data.get('search'));
	};
	const [_value, setValue] = useState(value);

	const onSearchHandler = (e) => {
		setValue(e.target.value)
		onSearch(e.target.value);
	};
	return (
		<form
			onSubmit={onSubmitHandler}
			className="col-12 col-md-9 bg-light rounded-3"
		>
			<div className="input-group d-flex align-items-center">
				<span className="ps-2">
					<SearchIcon />
				</span>
				<input
					onInput={onSearchHandler}
					type="text"
					className="form-control bg-light border-0 shadow-none ps-2"
					placeholder="What are you shopping for?"
					value={_value}
					name="search"
				/>
			</div>
		</form>
	);
};

export default SearchInput;

SearchInput.propTypes = {
	onSearch: PropTypes.func,
	onSubmit: PropTypes.func,
};

SearchInput.defaultProps = {
	onSearch: () => {},
	onSubmit: () => {},
};
