import { info } from 'console';
import path from 'path';
import React from 'react';

const devConsole = (element: any) => {
	// useEffect(() => {
	//   const run = console.log(e)
	//   return () => {

	//   }
	// }, [e])
	// listReactFiles(__dirname).then((files) => console.log(files));
	// console.trace();
	// console.log(Object.keys(element));
	// console.log(Object.keys(element));
	// console.log(path.extname(__dirname));
	if (process.env.NODE_ENV === 'development') {
		console.log('test', Object.keys({ element })[0], element);
	}
	

export default devConsole;
