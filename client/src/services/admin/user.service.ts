import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllUser: any = createAsyncThunk(
    "user/getAllUser",
    async () => {
        let URL = import.meta.env.VITE_BASE_URL
        const response = await axios.get(`${URL}/user`);
        return response.data;
    }
)

// API thêm user khi đăng ký
export const addUser: any = createAsyncThunk(
    "user/addUser",
    async (data: any) => {
        let URL = import.meta.env.VITE_BASE_URL
        const response = await axios.post(`${URL}/user`, data);
        return response.data;
    }
)

// API cập nhật trạng thái user
export const updateUserStatus: any = createAsyncThunk(
    "user/updateUserStatus",
    async (data: any) => {
        let URL = import.meta.env.VITE_BASE_URL
        const response = await axios.patch(`${URL}/user/${data.id}`, data);
        return response.data;
    }
)