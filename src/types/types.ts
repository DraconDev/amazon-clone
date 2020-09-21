export interface ItemProps {
	id: any;
	image: string;
	title: string;
	price: number;
	rating: number;
}

export interface appInitialStateProps {
	basket: [];
	imageLinks: {
		banner: string;
		mainLogo: string;
	};
	user: boolean;
}

export interface productProps {
	title: string;
	price: number;
	rating: number;
	image: string;
	id?: string;
}
