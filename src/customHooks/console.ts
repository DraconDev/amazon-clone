import React from 'react';

const consoleTest = (e: any) => {
	// useEffect(() => {
	//   const run = console.log(e)
	//   return () => {

	//   }
	// }, [e])
	// Object.keys({myFirstName})[0]
	if (process.env.NODE_ENV === 'production') {
		console.log('test', e);
	}
};

export default consoleTest;
