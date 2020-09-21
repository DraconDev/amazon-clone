import React, { useContext } from "react";
import AppContext from "../AppContext";

//? Pull information from data layer
export const useStateValue = () => useContext(AppContext);

export const useGetImage = (e: any) => useContext(AppContext)[0].imageLinks[e];

export const useStore = () => useContext(AppContext)[0];

export const useDispatchStore = () => useContext(AppContext)[1];
