import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {loadState} from "./storage.ts";
import axios, {AxiosError} from "axios";
import {LoginResponse, ProfileResponse} from "../interfaces/auth.interface.ts";
import {PREFIX} from "../Helpers/API.ts";
import {RootState} from "./store.ts";

export const JWT_PERSISTENT_STATE = "userData";

export interface UserPersistentState {
    jwt: string | null;
}

export interface UserState {
    jwt: string | null;
    loginErrorMessage?: string;
    registerErrorMessage?: string;
    profile?: ProfileResponse;
}

const initialState: UserState = {
    jwt: loadState<UserPersistentState>(JWT_PERSISTENT_STATE)?.jwt ?? null,
};

export const login = createAsyncThunk('user/login',
    async (params: { email: string, password: string }) => {
        try {
            const { data } = await axios.post<LoginResponse>(`${PREFIX}auth/login`, {
                email: params.email,
                password: params.password
            });
            return data;
        } catch (e) {
            if (e instanceof AxiosError) {
                throw new Error(e.response?.data.message);
            }
        }
    }
);

export const getProfile = createAsyncThunk<ProfileResponse, void, { state: RootState }>('user/profile',
    async (_, thunkAPI) => {
        try {
            const jwt = thunkAPI.getState().user.jwt;
            const { data } = await axios.get<ProfileResponse>(`${PREFIX}user/profile`, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            return data;
        } catch (e) {
            if (e instanceof AxiosError) {
                return thunkAPI.rejectWithValue(e.response?.data.message ?? 'Ошибка запроса');
            }
            return thunkAPI.rejectWithValue('Неизвестная ошибка');
        }
    }
);

export const register = createAsyncThunk('auth/register',
    async (params: {email: string, password: string, name: string}) => {
        try {
            const { data } = await axios.post<LoginResponse>(`${PREFIX}auth/register`, {
                email: params.email,
                password: params.password,
                name: params.name
            });
            return data;
        } catch (e) {
            if (e instanceof AxiosError) {
                throw new Error(e.response?.data.message);
            }
        }
    }
);

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state) => {
            state.jwt = null;
            state.profile = undefined;
        },
        clearLoginError: (state) => {
            state.loginErrorMessage = undefined;
        },
        clearRegisterError: (state) => {
            state.registerErrorMessage = undefined;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            if (!action.payload) return;
            state.jwt = action.payload.access_token;
        });
        builder.addCase(login.rejected, (state, action) => {
            state.loginErrorMessage = action.error.message;
        });
        builder.addCase(getProfile.fulfilled, (state, action) => {
            if (!action.payload) return;
            state.profile = action.payload;
        });
        builder.addCase(getProfile.rejected, (state, action) => {
            if (state.profile === undefined) return;
            state.profile.authErrorMessage = action.error.message;
            console.log(action.error.message);
        });
        builder.addCase(register.fulfilled, (state, action) => {
            if (!action.payload) return;
            state.jwt = action.payload.access_token;
        })
        builder.addCase(register.rejected, (state, action) => {
            state.registerErrorMessage = action.error.message;
        });
    }
});

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;