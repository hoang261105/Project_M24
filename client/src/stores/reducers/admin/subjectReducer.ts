import { createSlice } from "@reduxjs/toolkit";
import { Subject } from "../../../interface/admin";
import { addSubject, deleteSubject, getAllSubject, updateSubject } from "../../../services/admin/subject.service";

const subjectState: Subject[] = [];

const subjectReducer = createSlice({
    name: "subject",
    initialState: {
        subject: subjectState
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllSubject.fulfilled, (state, action) => {   
            state.subject = action.payload;
        })
        .addCase(addSubject.fulfilled, (state, action) => {
            state.subject.push(action.payload);
        })
        .addCase(deleteSubject.fulfilled, (state, action) => {
            state.subject = state.subject.filter((subject) => subject.id !== action.payload);
        })
        .addCase(updateSubject.fulfilled, (state, action) => {
            state.subject = state.subject.map((subject) => subject.id === action.payload.id ? action.payload : subject) ;

        })
    }
})

export default subjectReducer.reducer