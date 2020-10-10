import React from 'react';

const dev = () => {
	if (process.env.NODE_ENV === 'development') {
		return true;
	} else {
		return false;
	}
};

export default dev;
