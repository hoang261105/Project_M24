import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/admin/userReducer";
import courseReducer from "./reducers/admin/courseReducer";

const store = configureStore({
    reducer: {
        users: userReducer,
        courses: courseReducer
    }
})
export default store