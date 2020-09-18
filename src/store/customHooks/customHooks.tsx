import React, { useContext } from "react";
import AppContext from "../AppContext";

//? Pull information from data layer
export const useStateValue = () => useContext(AppContext);

export const useStore = () => useContext(AppContext)[0].basket;

export const useDispatchStore = () => useContext(AppContext)[1];
//? Required to use :
//? const dispatch = useDispatchStore();
