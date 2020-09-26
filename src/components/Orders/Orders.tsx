import React, { useEffect } from "react";
import classes from "./Orders.module.scss";
import { useStateValue } from "./../../store/customHooks/customHooks";
import { db } from "../../firebase/firebaseInit";
import { useState } from "react";
import Order from "../Order/Order";

interface OrdersProps {
	id: string;
	data: any;
}

function Orders() {
	const [{ basket, user }, dispatch] = useStateValue();
	const [orders, setOrders] = useState({} as object[]);

	console.log("user", user);

	useEffect(() => {
		user &&
			db
				.collection("users")
				.doc(user?.uid)
				.collection("orders")
				.orderBy("created", "desc")
				.onSnapshot((snapshot) => {
					setOrders(
						snapshot.docs.map((doc) => ({
							id: doc.id,
							data: doc.data(),
						}))
					);
				});
	}, [setOrders, user]);

	console.log("orders", orders);
	return (
		<div className={classes.orders}>
			{orders.length && orders.map((item: any) => <Order order={item}></Order>)}
		</div>
	);
}

export default Orders;
