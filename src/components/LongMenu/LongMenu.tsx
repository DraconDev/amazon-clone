import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import classes from './LongMenu.module.scss';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import menuItems from '../../constants/menuItems';

const options = [
	'None',
	'Atria',
	'Callisto',
	'Dione',
	'Ganymede',
	'Hangouts Call',
	'Luna',
	'Oberon',
	'Phobos',
	'Pyxis',
	'Sedna',
	'Titania',
	'Triton',
	'Umbriel',
];

const ITEM_HEIGHT = 48;

export default function LongMenu() {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div className={classes.longMenu}>
			<IconButton
				aria-label="more"
				aria-controls="long-menu"
				aria-haspopup="true"
				onClick={handleClick}
			>
				<MenuRoundedIcon />
			</IconButton>
			<Menu
				id="long-menu"
				anchorEl={anchorEl}
				keepMounted
				open={open}
				onClose={handleClose}
				PaperProps={{
					style: {
						maxHeight: ITEM_HEIGHT * 19,
						width: '28ch',
						marginTop: '45px',
					},
				}}
			>
				{menuItems.map((option) => (
					<MenuItem
						key={option}
						selected={option === 'Pyxis'}
						onClick={handleClose}
					>
						{option}
					</MenuItem>
				))}
			</Menu>
		</div>
	);
}
