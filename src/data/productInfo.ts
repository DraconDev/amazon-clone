import { useMemo } from "react";

var faker = require("faker");
// export const productInfo = () => {
// 	//? Mock product info

// 	return {
// 		id: `${Math.floor(Math.random() * 9)}${Math.floor(
// 			Math.random() * 9
// 		)}${Math.floor(Math.random() * 9)}${Math.floor(
// 			Math.random() * 9
// 		)}${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}`,
// 		title: faker.fake("{{commerce.productDescription}}"),
// 		price: Number(faker.fake("{{commerce.price}}")),
// 		// price: `${Math.floor(Math.random() * 400)}.${Math.floor(
// 		// 	Math.random() * 99
// 		// )}`,
// 		rating: Math.random() * 2 + 3,

// 		image: `https://picsum.photos/900/900?random=${Math.floor(
// 			Math.random() * 50 + 1
// 		)})`,
// 	};
// };

export const productInfo = () => {
	//? Mock product info

	return {
		id: `${Math.floor(Math.random() * 9)}${Math.floor(
			Math.random() * 9
		)}${Math.floor(Math.random() * 9)}${Math.floor(
			Math.random() * 9
		)}${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}`,
		title: faker.fake("{{commerce.productDescription}}"),
		price: Number(faker.fake("{{commerce.price}}")),
		// price: `${Math.floor(Math.random() * 400)}.${Math.floor(
		// 	Math.random() * 99
		// )}`,
		rating: Math.random() * 2 + 3,

		image: `https://picsum.photos/900/900?random=${Math.floor(
			Math.random() * 50 + 1
		)})`,
	};
};
