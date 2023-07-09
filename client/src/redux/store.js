import {   configureStore } from '@reduxjs/toolkit'
import reducer from "./slicer"

const store = configureStore({
    reducer,
});

export default store;