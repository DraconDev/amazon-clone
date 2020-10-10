import SearchIcon from '@material-ui/icons/Search';
import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Nav from '../Nav/Nav';
import classes from './Header.module.scss';
import { useGetImage } from './../../store/customHooks/customHooks';
import LongMenu from '../LongMenu/LongMenu';
import useFunctionOnKeypress from '../../customHooks/useActionOnKeypress';
import arrayOfProducts from '../../constants/arrayOfProducts';
import { AppContext } from './../../store/AppContext';
import { SEARCH_ITEMS } from '../../store/actionTypes';

function Header() {
	const [inputField, setInputField] = useState('');
	const history = useHistory();
	const [state, dispatch] = useContext(AppContext);

	// useEffect(() => {
	// 	const handleKeyUp = (e) => {
	// 		if (e.keyCode === 13) {
	// 			////* Do something

	// 		}
	// 	};

	// 	window.document.addEventListener("keyup", handleKeyUp);

	// 	return () => {
	// 		window.document.removeEventListener("keyup", handleKeyUp);
	// 	};
	// }, []);

	function Search() {
		console.log(inputField);
		const searchState = arrayOfProducts.filter(
			(e) => e.title.search(inputField) > 1 && e
		);
		dispatch({
			type: SEARCH_ITEMS,
			search: searchState,
		});
		history.push('/search');
		setInputField('');
	}

	useFunctionOnKeypress(Search);

	return (
		<div className={classes.header}>
			<LongMenu></LongMenu>
			<Link to="/">
				<img className={classes.logo} src={useGetImage('mainLogo')} alt="" />
			</Link>
			<div className={classes.search}>
				<input
					className={classes.searchInput}
					type="text"
					value={inputField}
					onChange={(e) => setInputField(e.target.value)}
				></input>
				<SearchIcon
					className={classes.searchIcon}
					onClick={Search}
				></SearchIcon>
			</div>
			<Nav></Nav>
		</div>
	);
}
export default Header;
