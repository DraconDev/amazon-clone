const basket = [{ price: 1 }, { price: 3 }, { price: 2 }];

// debugger;
export const test45 = basket.reduce((acc, e) => acc + e.price, 0);
