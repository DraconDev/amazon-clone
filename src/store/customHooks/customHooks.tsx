import React, { useContext } from "react";
import AppContext from "../AppContext";

//? Pull information from data layer
export const useStateValue = () => useContext(AppContext);

export const useStore = (e: any) => useContext(AppContext)[0][e];

export const useGetImage = (e: any) => useContext(AppContext)[0].imageLinks[e];

export const useDispatchStore = () => useContext(AppContext)[1];
//? Required to use :
//? const dispatch = useDispatchStore();
