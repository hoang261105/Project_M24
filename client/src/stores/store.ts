import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/admin/userReducer";

const store = configureStore({
    reducer: {
        users: userReducer,
    }
})
export default store