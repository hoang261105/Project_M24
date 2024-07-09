import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// API lấy môn học theo id từ id kháo học
export const getAllSubject: any = createAsyncThunk(
    "subject/getAllSubject",
    async (id: number) => {
        const URL = import.meta.env.VITE_BASE_URL
        const response = await axios.get(`${URL}/lesson?idCourse_like=${id}`);
        return response.data;
    }
)

// API thêm môn học theo id của khóa học
export const addSubject: any = createAsyncThunk(
    "subject/addSubject",
    async (data: any) => {
        const URL = import.meta.env.VITE_BASE_URL
        const response = await axios.post(`${URL}/lesson`, data);
        return response.data;
    }
)

// API xóa môn học theo id của khóa học
export const deleteSubject: any = createAsyncThunk(
    "subject/deleteSubject",
    async (id: number) => {
        const URL = import.meta.env.VITE_BASE_URL
        const response = await axios.delete(`${URL}/lesson/${id}`)
        return response.data;
    }
)

// API cập nhật môn thi
export const updateSubject: any = createAsyncThunk(
    "subject/updateSubject",
    async (data: any) => {
        console.log(1111,data);
        
        const URL = import.meta.env.VITE_BASE_URL
        const response = await axios.put(`${URL}/lesson/${data.id}`, data);
        return response.data;
    }
)