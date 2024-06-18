import { configureStore } from "@reduxjs/toolkit"

import listingReducer from "./reducers/ListingReducer";

const storeToLocalStorage = (props) => {
    return (exe) => {
        return (action) => {
            const result = exe(action);

            console.log(props.getState());

            localStorage.setItem("redux_store", JSON.stringify(props.getState()));

            return result;
        };
    };
};

const loadFromStorage = () => {
    if (localStorage.getItem("redux_store") !== null) {
        return JSON.parse(localStorage.getItem("redux_store"));
    }
};

const store = configureStore({
    reducer: {
        listingReducer,
    },
    devTools: true,
    middleware: (defaultMiddlewareFn) => {
        return [
            ...defaultMiddlewareFn(),
            storeToLocalStorage,
        ];
    },
    preloadedState: loadFromStorage(),
});

export default store;