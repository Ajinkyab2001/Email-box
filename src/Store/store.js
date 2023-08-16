import { configureStore } from "@reduxjs/toolkit";
import fetchEmailsSlice from "./Slice/fetchEmailsSlice";
const store = configureStore({
    reducer:{
        fetchedData:fetchEmailsSlice,
    }
})

export default store