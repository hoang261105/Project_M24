import { createSlice } from "@reduxjs/toolkit";
import { Exam } from "../../../interface/admin";
import { addExam, deleteExam, getAllExam, updateExam } from "../../../services/admin/exam.service";

const examState: Exam[] = [];

const examReducer = createSlice({
    name: "exam",
    initialState: {
        exam: examState
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllExam.fulfilled, (state, action) => {
            state.exam = action.payload;
        })
        .addCase(addExam.fulfilled, (state, action) => {
            state.exam.push(action.payload);
        })
        .addCase(deleteExam.fulfilled, (state, action) => {
            state.exam = state.exam.filter((exam) => exam.id !== action.payload);
        })
        .addCase(updateExam.fulfilled, (state, action) => {
            state.exam = state.exam.map((exam) => exam.id === action.payload.id ? action.payload : exam);

        })
    }
})

export default examReducer.reducer