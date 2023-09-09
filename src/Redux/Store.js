import { configureStore } from "@reduxjs/toolkit";
import alldataReducer from './Dataslice'

export default configureStore({
    reducer:{Sample:alldataReducer}
})