import {IUser} from "../../models/IUser.ts";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
// import {getAllForPagination} from "../../services/api.service.ts";
import {getAll} from "../../services/api.service.ts";
import {IUserResponseModel} from "../../models/IUserResponseModel.ts";
// import {useSearchParams} from "react-router";

type UserSliceType = {
    users: IUser[]
}

const initUserSliceState: UserSliceType = {users: []};

const loadUsers = createAsyncThunk("loadUsers", async (_, thunkAPI) => {

    try {
        const {users} = await getAll<IUserResponseModel>('/users');
        // console.log(users);
        return thunkAPI.fulfillWithValue(users);
        // throw new Error();
    } catch (e) {
        console.log(e);
        return thunkAPI.rejectWithValue('Some Users ERROR');
    }
});

// const loadUsers = createAsyncThunk("loadUsers", async (_, thunkAPI) => {
//     const [searchParams] = useSearchParams({page: "1"});
//     try {
//
//         const currentPage = searchParams.get('page') || '1';
//         const {users} = await getAllForPagination<IUserResponseModel>('/users?skip=', currentPage);
//         // console.log(users);
//         return thunkAPI.fulfillWithValue(users);
//         // throw new Error();
//     } catch (e) {
//         console.log(e);
//         return thunkAPI.rejectWithValue('Some Users ERROR');
//     }
// });

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: initUserSliceState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(loadUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
            state.users = action.payload;
        })
        .addCase(loadUsers.rejected, (state, action) => {
            console.log(state);
            console.log(action.payload);
        })
});

export const userActions = {...userSlice.actions, loadUsers};